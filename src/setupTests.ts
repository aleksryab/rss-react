import { expect, afterEach } from 'vitest';
import { fetch, Headers, Request, Response } from 'cross-fetch';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { server } from './mocks/server.js';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

expect.extend(matchers);

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());

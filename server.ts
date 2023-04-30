import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3003;

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
    template = await vite.transformIndexHtml(req.originalUrl, template);

    const chunks = template.split('<!--ssr-outlet-->');
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

    const { pipe } = await render(req.originalUrl, {
      onShellReady() {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(chunks[0]);
        pipe(res);
      },
      onShellError(err: Error) {
        res.statusCode = 500;
        res.send('<!doctype html><p>Error Loading...</p>');
        console.error(err);
      },
      onAllReady() {
        res.write(chunks[1]);
        res.end();
      },
      onError(err: Error) {
        console.error(err);
      },
    });
  });

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App is listening on http://localhost:${PORT}`);
  });
}

createServer();

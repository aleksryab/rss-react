import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore } from '../store';

const renderWithProvider = (component: ReactNode, initialRoute = '/') => {
  return render(
    <Provider store={createStore()}>
      <MemoryRouter initialEntries={[initialRoute]}>{component}</MemoryRouter>
    </Provider>
  );
};

export default renderWithProvider;

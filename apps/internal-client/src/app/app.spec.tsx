import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './app';

describe('App', () => {
  const history = createMemoryHistory();

  it('should render successfully', () => {
    const { baseElement } = render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );

    expect(baseElement).toBeTruthy();
  });
});

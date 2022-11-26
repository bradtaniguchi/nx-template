import { render } from '@testing-library/react';
import { HeaderBar } from './header-bar';

describe('HeaderBar', () => {
  it('should render successfully', () => {
    // eslint-disable-next-line react/jsx-no-undef
    const { baseElement } = render(<HeaderBar />);
    expect(baseElement).toBeTruthy();
  });
});

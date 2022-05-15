import { render } from '@testing-library/react';

import CommonReact from './common-react';

describe('CommonReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonReact />);
    expect(baseElement).toBeTruthy();
  });
});

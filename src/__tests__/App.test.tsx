import React from 'react';
import { render } from '@testing-library/react';
import App from '../app';

test('renders loaded questions title', () => {
  const { getByText } = render(<App />);
  const title = getByText(/loaded questions/i);
  expect(title).toBeInTheDocument();
});

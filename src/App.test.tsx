import React from 'react';
import { render, screen } from '@testing-library/react';
import Render from './Render';

test('renders learn react link', () => {
  render(<Render />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

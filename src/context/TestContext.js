import React from 'react';
import { render } from '@testing-library/react';
import { CartProvider } from './CartContext';

export const renderWithContext = ui => {
  return render(<CartProvider>{ui}</CartProvider>);
};

test('placeholder', () => {
  expect(true).toBe(true);
});

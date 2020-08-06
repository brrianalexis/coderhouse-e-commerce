import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Home } from '../';

describe('Home view', () => {
  it('should render the home view', () => {
    const { getByRole, getAllByText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(getByRole('heading')).toHaveTextContent(/important stuff/i);
    expect(getAllByText(/lorem/i).length).toBe(8);
    expect(Home).toMatchInlineSnapshot(`[Function]`);
  });
});

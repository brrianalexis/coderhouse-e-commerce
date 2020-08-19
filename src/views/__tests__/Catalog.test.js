import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Catalog } from '../';

describe('Catalog view', () => {
  it('should render the item catalog', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );

    expect(screen.getByText(/loading/i)).toHaveTextContent(
      'Loading articles on sale...'
    );

    expect(
      screen.getByRole('heading', {
        name: /catalog/i,
      })
    ).toHaveTextContent('Catalog');

    //?   react-scripts tiene versiones de jest y jsdom muy viejas, por lo cual no anda el waitFor() de RTL
    /* await waitFor(() => {
      expect(screen.getByTestId('item-list-container')).toBeInTheDocument();
    });

    expect(screen.getByTestId('item-list-container')).toHaveStyle(`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
      `);

    expect(screen.getByTestId('item-list-container')).toMatchInlineSnapshot(); */
  });
});

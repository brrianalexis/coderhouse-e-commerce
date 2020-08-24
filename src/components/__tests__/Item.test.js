import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Item } from '../';

describe('Item component', () => {
  it('should render a single item with the received props', () => {
    const { id: albumId, artist, albumTitle, albumArt, releaseYear, price } = {
      id: '4',
      artist: 'Aminé',
      albumTitle: 'Limbo',
      albumArt:
        'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_600/fl_lossy,pg_1/lllxnrwfcp892q8tcbyx/amine-limbo',
      releaseYear: 2020,
      price: '$4.999',
    };

    render(
      <MemoryRouter>
        <Item
          key={albumId}
          albumArt={albumArt}
          albumTitle={albumTitle}
          artist={artist}
          releaseYear={releaseYear}
          price={price}
        />
      </MemoryRouter>
    );

    expect(screen.getByTestId('Limbo-container')).toMatchInlineSnapshot(`
      <div
        class="item-container"
        data-testid="Limbo-container"
        style="width: 30vw; text-align: center; background-color: rgb(168, 218, 220);"
      >
        <p
          data-testid="artist-title"
        >
          Aminé
        </p>
        <img
          alt="Limbo album cover by Aminé"
          class="album-art"
          data-testid="album-art"
          src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_600/fl_lossy,pg_1/lllxnrwfcp892q8tcbyx/amine-limbo"
          style="border: 2px solid #457b9d; width: 25vw;"
        />
        <p
          data-testid="album-title"
        >
          Limbo
           (
          2020
          )
        </p>
        <p
          data-testid="album-price"
        >
          $4.999
        </p>
      </div>
    `);

    expect(screen.queryByTestId('Limbo-container')).toHaveStyle(`
      width: 30vw;
      text-align: center;
      background-color: rgb(168, 218, 220);
    `);

    expect(screen.queryByTestId('artist-title')).toHaveTextContent(/Aminé/);

    expect(
      screen.getByRole('img', {
        name: /limbo album cover by aminé/i,
      })
    ).toHaveStyle(`
      border: 2px solid #457b9d;
      width: 25vw;
    `);
    expect(
      screen.getByRole('img', {
        name: /limbo album cover by aminé/i,
      })
    ).toHaveAttribute('alt', 'Limbo album cover by Aminé');

    expect(screen.getByTestId('album-title')).toHaveTextContent('Limbo (2020)');

    expect(screen.getByTestId('album-price')).toHaveTextContent('$4.999');
  });
});

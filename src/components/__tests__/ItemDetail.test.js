import React from 'react';
import { render, screen } from '@testing-library/react';
import { ItemDetail } from '../';

describe('ItemDetail component', () => {
  const articleMock = {
    id: '4',
    artist: 'Aminé',
    albumTitle: 'Limbo',
    albumArt:
      'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_600/fl_lossy,pg_1/lllxnrwfcp892q8tcbyx/amine-limbo',
    releaseYear: 2020,
    price: '$4.999',
  };

  it('renders a single Item with its complete detail', () => {
    const { container } = render(<ItemDetail article={articleMock} />);

    expect(
      screen.getByRole('img', {
        name: /limbo/i,
      })
    ).toHaveAttribute('alt', 'Limbo by Aminé album cover');

    expect(
      screen.getByRole('heading', {
        name: /limbo by aminé/i,
      })
    ).toHaveTextContent('Limbo by Aminé - (2020)');

    expect(screen.getByText(/price/i)).toHaveTextContent('Price: $4.999');

    expect(container).toMatchInlineSnapshot(`
      <div>
        <img
          alt="Limbo by Aminé album cover"
          class="album-art"
          src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_600/fl_lossy,pg_1/lllxnrwfcp892q8tcbyx/amine-limbo"
          style="border: 2px solid #457b9d; width: 30vw;"
        />
        <h2
          class="item-detail-title"
        >
          Limbo
           by 
          Aminé
           - (
          2020
          )
        </h2>
        <p>
          Price: 
          $4.999
        </p>
      </div>
    `);

    screen.debug();
  });
});

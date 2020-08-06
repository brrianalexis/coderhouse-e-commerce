import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Link } from '../';

describe('Link component', () => {
  it("should render a link with no text-decoration, pointing to the provided 'to' location and a children inside it", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Link to='/'>
          <p>Yay!</p>
        </Link>
      </MemoryRouter>
    );
    const link = getByRole('link');

    expect(link).toHaveStyle(`
        text-decoration: none;
        color: black;
        display: flex;
        align-items: center;
        text-transform: uppercase;
    `);
    expect(link.getAttribute('href')).toMatch('/');
    expect(link).toHaveTextContent('Yay!');
    expect(link).toMatchInlineSnapshot(`
      <a
        href="/"
        style="text-decoration: none; color: black; display: flex; align-items: center; text-transform: uppercase;"
      >
        <p>
          Yay!
        </p>
      </a>
    `);
  });
});

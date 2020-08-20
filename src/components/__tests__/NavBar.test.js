import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { NavBar } from '../';

describe('NavBar component', () => {
  it('should render a header containing a nav with the links to the principal sections of the site', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const header = getByRole('banner');
    const nav = getByRole('navigation');

    expect(header).toHaveTextContent(/home.*products.*contact us.*cart/i);
    expect(header).toHaveStyle(`
        display: flex;
        align-items: center;
        background-color: #457B9D;
        width: 100%;
        height: 3rem;
        position: sticky;
        top: 0;
    `);
    expect(header).toMatchInlineSnapshot(`
      <header
        style="display: flex; align-items: center; background-color: rgb(69, 123, 157); width: 100%; height: 3rem; position: sticky; top: 0px;"
      >
        <nav
          style="display: flex; align-items: center; justify-content: space-around; width: 100%;"
        >
          <a
            href="/"
            style="text-decoration: none; color: black; display: flex; align-items: center; text-transform: uppercase;"
          >
            <svg
              aria-label="Home"
              class="StyledIcon-ofa7kd-0 hGmYEj"
              style="margin: 5px;"
              viewBox="0 0 24 24"
            >
              <path
                d="M1,11 L12,2 L23,11 M15,23 L15,15 L15,15 L9,15 L9,23 M4,23 L4,9 M20,23 L20,9"
                fill="none"
                stroke="#000"
                stroke-width="2"
              />
            </svg>
            Home
          </a>
          <a
            href="/products"
            style="text-decoration: none; color: black; display: flex; align-items: center; text-transform: uppercase;"
          >
            <svg
              aria-label="Shop"
              class="StyledIcon-ofa7kd-0 hGmYEj"
              style="margin: 5px;"
              viewBox="0 0 24 24"
            >
              <path
                d="M4,7 L20,7 L20,23 L4,23 L4,7 Z M8,9 L8,5 C8,2.790861 9.79535615,1 12,1 L12,1 C14.209139,1 16,2.79535615 16,5 L16,9"
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-width="2"
              />
            </svg>
            Products
          </a>
          <a
            href="/contact"
            style="text-decoration: none; color: black; display: flex; align-items: center; text-transform: uppercase;"
          >
            <svg
              aria-label="Contact"
              class="StyledIcon-ofa7kd-0 hGmYEj"
              style="margin: 5px;"
              viewBox="0 0 24 24"
            >
              <path
                d="M1,2 L22,2 L22,18 L14,18 L6,22 L6,18 L1,18 L1,2 Z M6,10 L7,10 L7,11 L6,11 L6,10 Z M11,10 L12,10 L12,11 L11,11 L11,10 Z M16,10 L17,10 L17,11 L16,11 L16,10 Z"
                fill="none"
                stroke="#000"
                stroke-width="2"
              />
            </svg>
            Contact Us
          </a>
          <a
            href="/cart"
            style="text-decoration: none; color: black; display: flex; align-items: center; text-transform: uppercase;"
          >
            <svg
              aria-label="Cart"
              class="StyledIcon-ofa7kd-0 hGmYEj"
              style="margin: 5px;"
              viewBox="0 0 24 24"
            >
              <path
                d="M5,5 L22,5 L20,14 L7,14 L4,2 L0,2 M7,14 L8,18 L21,18 M19,23 C18.4475,23 18,22.5525 18,22 C18,21.4475 18.4475,21 19,21 C19.5525,21 20,21.4475 20,22 C20,22.5525 19.5525,23 19,23 Z M9,23 C8.4475,23 8,22.5525 8,22 C8,21.4475 8.4475,21 9,21 C9.5525,21 10,21.4475 10,22 C10,22.5525 9.5525,23 9,23 Z"
                fill="none"
                stroke="#000"
                stroke-width="2"
              />
            </svg>
            Cart
          </a>
        </nav>
      </header>
    `);

    expect(nav).toHaveTextContent(/home.*products.*contact us.*cart/i);
    expect(nav).toHaveStyle(`
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
    `);
    expect(nav).toMatchInlineSnapshot(`
      <nav
        style="display: flex; align-items: center; justify-content: space-around; width: 100%;"
      >
        <a
          href="/"
          style="text-decoration: none; color: black; display: flex; align-items: center; text-transform: uppercase;"
        >
          <svg
            aria-label="Home"
            class="StyledIcon-ofa7kd-0 hGmYEj"
            style="margin: 5px;"
            viewBox="0 0 24 24"
          >
            <path
              d="M1,11 L12,2 L23,11 M15,23 L15,15 L15,15 L9,15 L9,23 M4,23 L4,9 M20,23 L20,9"
              fill="none"
              stroke="#000"
              stroke-width="2"
            />
          </svg>
          Home
        </a>
        <a
          href="/products"
          style="text-decoration: none; color: black; display: flex; align-items: center; text-transform: uppercase;"
        >
          <svg
            aria-label="Shop"
            class="StyledIcon-ofa7kd-0 hGmYEj"
            style="margin: 5px;"
            viewBox="0 0 24 24"
          >
            <path
              d="M4,7 L20,7 L20,23 L4,23 L4,7 Z M8,9 L8,5 C8,2.790861 9.79535615,1 12,1 L12,1 C14.209139,1 16,2.79535615 16,5 L16,9"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="2"
            />
          </svg>
          Products
        </a>
        <a
          href="/contact"
          style="text-decoration: none; color: black; display: flex; align-items: center; text-transform: uppercase;"
        >
          <svg
            aria-label="Contact"
            class="StyledIcon-ofa7kd-0 hGmYEj"
            style="margin: 5px;"
            viewBox="0 0 24 24"
          >
            <path
              d="M1,2 L22,2 L22,18 L14,18 L6,22 L6,18 L1,18 L1,2 Z M6,10 L7,10 L7,11 L6,11 L6,10 Z M11,10 L12,10 L12,11 L11,11 L11,10 Z M16,10 L17,10 L17,11 L16,11 L16,10 Z"
              fill="none"
              stroke="#000"
              stroke-width="2"
            />
          </svg>
          Contact Us
        </a>
        <a
          href="/cart"
          style="text-decoration: none; color: black; display: flex; align-items: center; text-transform: uppercase;"
        >
          <svg
            aria-label="Cart"
            class="StyledIcon-ofa7kd-0 hGmYEj"
            style="margin: 5px;"
            viewBox="0 0 24 24"
          >
            <path
              d="M5,5 L22,5 L20,14 L7,14 L4,2 L0,2 M7,14 L8,18 L21,18 M19,23 C18.4475,23 18,22.5525 18,22 C18,21.4475 18.4475,21 19,21 C19.5525,21 20,21.4475 20,22 C20,22.5525 19.5525,23 19,23 Z M9,23 C8.4475,23 8,22.5525 8,22 C8,21.4475 8.4475,21 9,21 C9.5525,21 10,21.4475 10,22 C10,22.5525 9.5525,23 9,23 Z"
              fill="none"
              stroke="#000"
              stroke-width="2"
            />
          </svg>
          Cart
        </a>
      </nav>
    `);
  });
});

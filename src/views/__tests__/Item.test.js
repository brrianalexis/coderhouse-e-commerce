import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { ItemView } from '../';

describe('Item view', () => {
  it('should render an individual item view', async () => {
    const { container } = render(
      <MemoryRouter>
        <ItemView />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', {
        name: /item detail/i,
      })
    ).toHaveTextContent('Item Detail');

    expect(
      screen.queryByTestId('item-detail-container')
    ).not.toBeInTheDocument();

    await waitFor(
      () => {
        expect(screen.getByTestId('item-detail-container')).toBeInTheDocument();
      },
      {
        timeout: 3500,
      }
    );

    expect(screen.getByTestId('item-detail-container')).toHaveStyle(`
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      text-align: center;
      align-items: center;
      color: #1D3557;
    `);

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

    expect(screen.getByRole('spinbutton')).toHaveValue(1);
    user.click(screen.getByTestId('add-button'));
    expect(screen.getByRole('spinbutton')).toHaveValue(2);
    user.click(screen.getByTestId('subtract-button'));
    expect(screen.getByRole('spinbutton')).toHaveValue(1);

    window.alert = jest.fn();
    user.click(screen.getByTestId('add-to-cart-button'));
    expect(window.alert).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledTimes(1);

    expect(container).toMatchInlineSnapshot(`
      <div>
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
        <h1
          style="color: rgb(29, 53, 87); text-align: center;"
        >
          Item Detail
        </h1>
        <div
          data-testid="item-detail-container"
          style="display: flex; flex-wrap: wrap; flex-direction: column; text-align: center; align-items: center; color: rgb(29, 53, 87);"
        >
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
          <div
            data-testid="article-counter-container"
            style="display: flex; flex-direction: column; width: 30vw;"
          >
            <div
              data-testid="article-counter"
              style="background-color: rgb(241, 250, 238);"
            >
              <div
                data-testid="add-subtract-container"
                style="box-sizing: border-box; display: flex; justify-content: space-around;"
              >
                <button
                  data-testid="subtract-button"
                  disabled=""
                  style="background: none; padding: 0px; cursor: pointer; outline: inherit;"
                >
                  <svg
                    aria-label="Subtract"
                    class="StyledIcon-ofa7kd-0 dMUFv add-to-cart-icons"
                    data-testid="subtract-icon"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M2,12 L22,12"
                      fill="none"
                      stroke="#000"
                      stroke-width="2"
                    />
                  </svg>
                </button>
                <input
                  data-testid="article-counter-input"
                  disabled=""
                  max="10"
                  min="1"
                  style="width: 10vw; height: 2rem; box-sizing: border-box; text-align: center; background-color: inherit;"
                  type="number"
                  value="1"
                />
                <button
                  data-testid="add-button"
                  style="background: none; padding: 0px; cursor: pointer; outline: inherit;"
                >
                  <svg
                    aria-label="Add"
                    class="StyledIcon-ofa7kd-0 dMUFv add-to-cart-icons"
                    data-testid="add-icon"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12,22 L12,2 M2,12 L22,12"
                      fill="none"
                      stroke="#000"
                      stroke-width="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <button
              class="add-to-cart-button"
              data-testid="add-to-cart-button"
              style="background: none; border: 1px solid #a8dadc; padding: 0px; cursor: pointer; outline: inherit; height: 1.5rem; margin: 0.5vh auto auto auto; background-color: rgb(241, 250, 238); border-radius: 0.5em; width: 27.5vw;"
            >
              Add to cart
            </button>
          </div>
          <button
            class="add-to-cart-button"
            style="background: none; border: 1px solid #a8dadc; padding: 0px; cursor: pointer; outline: inherit; height: 1.5rem; margin: 0.5vh auto auto auto; background-color: rgb(241, 250, 238); border-radius: 0.5em; width: 27.5vw;"
          >
            Buy
          </button>
        </div>
      </div>
    `);
  });
});

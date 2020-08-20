import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Home } from '../';

describe('Home view', () => {
  it('should render the home view', () => {
    const { getByRole, getByText, getAllByText, container } = render(
      <MemoryRouter>
        <Home greeting='hey, tester!' />
      </MemoryRouter>
    );

    expect(getByRole('heading')).toHaveTextContent(/important stuff/i);
    expect(getByText(/hey, tester!/i)).toHaveTextContent(/hey, tester!/i);
    expect(getAllByText(/lorem/i).length).toBe(8);
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
        <h1>
          Important Stuff
        </h1>
        <p>
          hey, tester!
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
                min="2"
                style="width: 10vw; height: 2rem; box-sizing: border-box; text-align: center; background-color: inherit;"
                type="number"
                value="2"
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
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor lobortis risus, nec accumsan magna malesuada nec. Nullam facilisis quam vel quam mattis, vitae mattis arcu porttitor. In bibendum velit quis libero porta, sed ullamcorper nunc volutpat. Integer placerat aliquam ornare. Aliquam maximus, neque id ornare porta, ex nibh porttitor orci, non dapibus purus libero in elit. Maecenas tincidunt arcu vel malesuada cursus. Sed ut facilisis est. Sed euismod pulvinar placerat. Nulla facilisi. Suspendisse vel ante sit amet sapien consequat consectetur. Quisque at neque ante. Maecenas efficitur interdum neque, non cursus tortor blandit at.
          </p>
          <p>
            Curabitur vitae orci quis nisi consequat facilisis non at sapien. Cras feugiat quam sed egestas consequat. Maecenas vestibulum mollis vehicula. Morbi ante ipsum, semper sed mattis ut, viverra non risus. Sed in quam sit amet dolor fermentum consectetur ac ac lacus. Proin a tortor dolor. Pellentesque eget urna orci. Maecenas bibendum condimentum tortor, non semper diam. Nulla sed ipsum justo. Nam eget pharetra neque, eget eleifend neque. Vivamus eu hendrerit lorem, non tincidunt purus.
          </p>
          <p>
            Suspendisse id metus imperdiet, malesuada libero quis, auctor libero. In maximus in magna sit amet hendrerit. Nunc id urna rutrum, vehicula est ut, scelerisque ex. Suspendisse pretium dui leo, vitae interdum libero vestibulum id. Duis tempor purus commodo, condimentum magna et, pretium orci. Donec pellentesque, turpis nec commodo sollicitudin, purus elit ullamcorper metus, ac elementum dui quam a urna. Donec dui nisl, laoreet id dapibus eu, condimentum ut nibh. Vestibulum ut tempus est, vel tempor felis. Nulla placerat augue eu augue interdum, id fringilla magna posuere. Sed cursus convallis lorem vitae ullamcorper. Aliquam pellentesque in tortor id mattis. Etiam fermentum ipsum sem, ut consequat nisi faucibus quis. Aenean rhoncus quis eros eget aliquet.
          </p>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ac lorem vitae lectus sollicitudin gravida nec at massa. Duis et velit sit amet lorem molestie lobortis. Sed commodo nisl vitae nisi sagittis dapibus ut quis velit. Praesent ut justo auctor, venenatis libero quis, feugiat augue. Curabitur sagittis est eros, ac molestie libero semper eget. Nunc in enim id sem condimentum faucibus vel eget massa.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor lobortis risus, nec accumsan magna malesuada nec. Nullam facilisis quam vel quam mattis, vitae mattis arcu porttitor. In bibendum velit quis libero porta, sed ullamcorper nunc volutpat. Integer placerat aliquam ornare. Aliquam maximus, neque id ornare porta, ex nibh porttitor orci, non dapibus purus libero in elit. Maecenas tincidunt arcu vel malesuada cursus. Sed ut facilisis est. Sed euismod pulvinar placerat. Nulla facilisi. Suspendisse vel ante sit amet sapien consequat consectetur. Quisque at neque ante. Maecenas efficitur interdum neque, non cursus tortor blandit at.
          </p>
          <p>
            Curabitur vitae orci quis nisi consequat facilisis non at sapien. Cras feugiat quam sed egestas consequat. Maecenas vestibulum mollis vehicula. Morbi ante ipsum, semper sed mattis ut, viverra non risus. Sed in quam sit amet dolor fermentum consectetur ac ac lacus. Proin a tortor dolor. Pellentesque eget urna orci. Maecenas bibendum condimentum tortor, non semper diam. Nulla sed ipsum justo. Nam eget pharetra neque, eget eleifend neque. Vivamus eu hendrerit lorem, non tincidunt purus.
          </p>
          <p>
            Suspendisse id metus imperdiet, malesuada libero quis, auctor libero. In maximus in magna sit amet hendrerit. Nunc id urna rutrum, vehicula est ut, scelerisque ex. Suspendisse pretium dui leo, vitae interdum libero vestibulum id. Duis tempor purus commodo, condimentum magna et, pretium orci. Donec pellentesque, turpis nec commodo sollicitudin, purus elit ullamcorper metus, ac elementum dui quam a urna. Donec dui nisl, laoreet id dapibus eu, condimentum ut nibh. Vestibulum ut tempus est, vel tempor felis. Nulla placerat augue eu augue interdum, id fringilla magna posuere. Sed cursus convallis lorem vitae ullamcorper. Aliquam pellentesque in tortor id mattis. Etiam fermentum ipsum sem, ut consequat nisi faucibus quis. Aenean rhoncus quis eros eget aliquet.
          </p>
          <p>
            Curabitur finibus molestie neque in facilisis. Curabitur cursus vulputate interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dictum ligula vitae fermentum vehicula. Fusce massa leo, feugiat et augue quis, porta consectetur diam. Curabitur sit amet est ut purus mollis sagittis at bibendum leo. Cras posuere auctor nulla et sodales. Etiam quis sapien cursus, rhoncus mi eu, sagittis enim. Suspendisse potenti. Donec nec sagittis nibh. Donec a hendrerit diam. Nunc viverra volutpat urna, eu varius turpis tincidunt vel.
          </p>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ac lorem vitae lectus sollicitudin gravida nec at massa. Duis et velit sit amet lorem molestie lobortis. Sed commodo nisl vitae nisi sagittis dapibus ut quis velit. Praesent ut justo auctor, venenatis libero quis, feugiat augue. Curabitur sagittis est eros, ac molestie libero semper eget. Nunc in enim id sem condimentum faucibus vel eget massa.
          </p>
        </div>
      </div>
    `);
  });
});

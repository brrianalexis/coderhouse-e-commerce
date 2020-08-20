import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { Catalog } from '../';

describe('Catalog view', () => {
  it('should render the item catalog', async () => {
    const { container } = render(
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

    await waitFor(
      () => {
        expect(screen.getByTestId('item-list-container')).toBeInTheDocument();
      },
      {
        timeout: 3500,
      }
    );

    expect(screen.getByTestId('item-list-container')).toHaveStyle(`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    `);

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
          Catalog
        </h1>
        <div
          data-testid="item-list-container"
          style="display: flex; justify-content: center; flex-direction: row; flex-wrap: wrap;"
        >
          <div
            class="item-container"
            data-testid="In a Tidal Wave of Mistery-container"
            style="width: 30vw; text-align: center; background-color: rgb(168, 218, 220);"
          >
            <p
              data-testid="artist-title"
            >
              Capital Cities
            </p>
            <img
              alt="In a Tidal Wave of Mistery album cover by Capital Cities"
              class="album-art"
              data-testid="album-art"
              src="https://img.discogs.com/aQbuEE4HNnC3ynAXxhE6KVNYDIQ=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8500393-1462864818-7479.jpeg.jpg"
              style="border: 2px solid #457b9d; width: 25vw;"
            />
            <p
              data-testid="album-title"
            >
              In a Tidal Wave of Mistery
               (
              2013
              )
            </p>
            <p
              data-testid="album-price"
            >
              $4.499
            </p>
          </div>
          <div
            class="item-container"
            data-testid="Dear Annie-container"
            style="width: 30vw; text-align: center; background-color: rgb(168, 218, 220);"
          >
            <p
              data-testid="artist-title"
            >
              Rejjie Snow
            </p>
            <img
              alt="Dear Annie album cover by Rejjie Snow"
              class="album-art"
              data-testid="album-art"
              src="https://img.discogs.com/DLqyKHmFgui9rOQ0uL8rxrR45Wk=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11594378-1519088601-4662.png.jpg"
              style="border: 2px solid #457b9d; width: 25vw;"
            />
            <p
              data-testid="album-title"
            >
              Dear Annie
               (
              2018
              )
            </p>
            <p
              data-testid="album-price"
            >
              $4.799
            </p>
          </div>
          <div
            class="item-container"
            data-testid="FOTO-container"
            style="width: 30vw; text-align: center; background-color: rgb(168, 218, 220);"
          >
            <p
              data-testid="artist-title"
            >
              Kota the Friend
            </p>
            <img
              alt="FOTO album cover by Kota the Friend"
              class="album-art"
              data-testid="album-art"
              src="https://ssla.ulximg.com/image/750x750/cover/1557948299_964fbafbbfccd4aa84490dd50c6e3719.jpg/de412bafa35f836902c092e30d36f752/1557948299_87db77ea12eff09cd01a717b654682bf.jpg"
              style="border: 2px solid #457b9d; width: 25vw;"
            />
            <p
              data-testid="album-title"
            >
              FOTO
               (
              2019
              )
            </p>
            <p
              data-testid="album-price"
            >
              $4.799
            </p>
          </div>
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
          <div
            class="item-container"
            data-testid="Die Lit-container"
            style="width: 30vw; text-align: center; background-color: rgb(168, 218, 220);"
          >
            <p
              data-testid="artist-title"
            >
              Playboi Carti
            </p>
            <img
              alt="Die Lit album cover by Playboi Carti"
              class="album-art"
              data-testid="album-art"
              src="https://t2.genius.com/unsafe/1655x0/https%3A%2F%2Fimages.genius.com%2Fa6edc3b66b348994bc5217b05909951d.1000x1000x1.png"
              style="border: 2px solid #457b9d; width: 25vw;"
            />
            <p
              data-testid="album-title"
            >
              Die Lit
               (
              2018
              )
            </p>
            <p
              data-testid="album-price"
            >
              $4.099
            </p>
          </div>
          <div
            class="item-container"
            data-testid="Hollywood's Bleeding-container"
            style="width: 30vw; text-align: center; background-color: rgb(168, 218, 220);"
          >
            <p
              data-testid="artist-title"
            >
              Post Malone
            </p>
            <img
              alt="Hollywood's Bleeding album cover by Post Malone"
              class="album-art"
              data-testid="album-art"
              src="https://media.pitchfork.com/photos/5d71762bc7531e0008f96fd8/1:1/w_600/postmalone_hollywoodsbleeding.jpg"
              style="border: 2px solid #457b9d; width: 25vw;"
            />
            <p
              data-testid="album-title"
            >
              Hollywood's Bleeding
               (
              2019
              )
            </p>
            <p
              data-testid="album-price"
            >
              $4.499
            </p>
          </div>
          <div
            class="item-container"
            data-testid="23-container"
            style="width: 30vw; text-align: center; background-color: rgb(168, 218, 220);"
          >
            <p
              data-testid="artist-title"
            >
              Pimp Flaco
            </p>
            <img
              alt="23 album cover by Pimp Flaco"
              class="album-art"
              data-testid="album-art"
              src="https://tempusoficial.files.wordpress.com/2017/11/0e786bdbf4474f5ebbede98dbfa86ec7.jpg"
              style="border: 2px solid #457b9d; width: 25vw;"
            />
            <p
              data-testid="album-title"
            >
              23
               (
              2017
              )
            </p>
            <p
              data-testid="album-price"
            >
              $2.999
            </p>
          </div>
          <div
            class="item-container"
            data-testid="Lejos-container"
            style="width: 30vw; text-align: center; background-color: rgb(168, 218, 220);"
          >
            <p
              data-testid="artist-title"
            >
              Coral Casino
            </p>
            <img
              alt="Lejos album cover by Coral Casino"
              class="album-art"
              data-testid="album-art"
              src="https://s.mxmcdn.net/images-storage/albums4/0/9/8/3/5/8/39853890_800_800.jpg"
              style="border: 2px solid #457b9d; width: 25vw;"
            />
            <p
              data-testid="album-title"
            >
              Lejos
               (
              2018
              )
            </p>
            <p
              data-testid="album-price"
            >
              $2.499
            </p>
          </div>
          <div
            class="item-container"
            data-testid="FREE 6LACK-container"
            style="width: 30vw; text-align: center; background-color: rgb(168, 218, 220);"
          >
            <p
              data-testid="artist-title"
            >
              6lack
            </p>
            <img
              alt="FREE 6LACK album cover by 6lack"
              class="album-art"
              data-testid="album-art"
              src="https://img.discogs.com/847OKKDbDyBArGraK97_2D_L_3E=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-9990899-1489779869-8321.jpeg.jpg"
              style="border: 2px solid #457b9d; width: 25vw;"
            />
            <p
              data-testid="album-title"
            >
              FREE 6LACK
               (
              2016
              )
            </p>
            <p
              data-testid="album-price"
            >
              $4.499
            </p>
          </div>
        </div>
      </div>
    `);
  });
});

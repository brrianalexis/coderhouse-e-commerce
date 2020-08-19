import React from 'react';
import { render, screen } from '@testing-library/react';
import { ItemList } from '../';

describe('ItemList component', () => {
  const articlesMockData = [
    {
      id: '1',
      artist: 'Capital Cities',
      albumTitle: 'In a Tidal Wave of Mistery',
      albumArt:
        'https://img.discogs.com/aQbuEE4HNnC3ynAXxhE6KVNYDIQ=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8500393-1462864818-7479.jpeg.jpg',
      releaseYear: 2013,
      price: '$4.499',
    },
    {
      id: '2',
      artist: 'Rejjie Snow',
      albumTitle: 'Dear Annie',
      albumArt:
        'https://img.discogs.com/DLqyKHmFgui9rOQ0uL8rxrR45Wk=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11594378-1519088601-4662.png.jpg',
      releaseYear: 2018,
      price: '$4.799',
    },
    {
      id: '3',
      artist: 'Kota the Friend',
      albumTitle: 'FOTO',
      albumArt:
        'https://ssla.ulximg.com/image/750x750/cover/1557948299_964fbafbbfccd4aa84490dd50c6e3719.jpg/de412bafa35f836902c092e30d36f752/1557948299_87db77ea12eff09cd01a717b654682bf.jpg',
      releaseYear: 2019,
      price: '$4.799',
    },
    {
      id: '4',
      artist: 'Aminé',
      albumTitle: 'Limbo',
      albumArt:
        'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_600/fl_lossy,pg_1/lllxnrwfcp892q8tcbyx/amine-limbo',
      releaseYear: 2020,
      price: '$4.999',
    },
    {
      id: '5',
      artist: 'Playboi Carti',
      albumTitle: 'Die Lit',
      albumArt:
        'https://t2.genius.com/unsafe/1655x0/https%3A%2F%2Fimages.genius.com%2Fa6edc3b66b348994bc5217b05909951d.1000x1000x1.png',
      releaseYear: 2018,
      price: '$4.099',
    },
    {
      id: '6',
      artist: 'Post Malone',
      albumTitle: "Hollywood's Bleeding",
      albumArt:
        'https://media.pitchfork.com/photos/5d71762bc7531e0008f96fd8/1:1/w_600/postmalone_hollywoodsbleeding.jpg',
      releaseYear: 2019,
      price: '$4.499',
    },
    {
      id: '7',
      artist: 'Pimp Flaco',
      albumTitle: '23',
      albumArt:
        'https://tempusoficial.files.wordpress.com/2017/11/0e786bdbf4474f5ebbede98dbfa86ec7.jpg',
      releaseYear: 2017,
      price: '$2.999',
    },
    {
      id: '8',
      artist: 'Coral Casino',
      albumTitle: 'Lejos',
      albumArt:
        'https://s.mxmcdn.net/images-storage/albums4/0/9/8/3/5/8/39853890_800_800.jpg',
      releaseYear: 2018,
      price: '$2.499',
    },
    {
      id: '9',
      artist: '6lack',
      albumTitle: 'FREE 6LACK',
      albumArt:
        'https://img.discogs.com/847OKKDbDyBArGraK97_2D_L_3E=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-9990899-1489779869-8321.jpeg.jpg',
      releaseYear: 2016,
      price: '$4.499',
    },
  ];

  it('should render a list of Items with the received data', () => {
    render(<ItemList articles={articlesMockData} />);

    expect(screen.getByTestId('item-list-container')).toMatchInlineSnapshot(`
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
    `);

    expect(screen.getByTestId('item-list-container')).toHaveStyle(`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    `);
  });
});

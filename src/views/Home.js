import React, { useState, useEffect } from 'react';
import { ItemList } from '../components';

export const Home = () => {
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

  const [articles, setArticles] = useState();
  const [fetching, setFetching] = useState(true);

  const getArticles = new Promise((res, rej) => {
    setTimeout(() => {
      setArticles(articlesMockData);
      setFetching(false);
      res();
      // res(articles)
    }, 2000);
  });

  useEffect(() => {
    getArticles
      .then(() => {
        console.log('resolved');
      })
      .catch(() => {
        console.log('rejected');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 style={{ color: '#1D3557', textAlign: 'center' }}>Products</h1>
      {fetching ? (
        <p style={{ color: '#1D3557', textAlign: 'center' }}>
          Loading products on sale...
        </p>
      ) : (
        <ItemList articles={articles} />
      )}
    </>
  );
};

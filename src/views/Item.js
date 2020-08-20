import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { NavBar, ItemDetail, ItemCount } from '../components';

//*   Mi ItemDetailContainer -> Una vista/container de ítems individuales
//*   Actualmente se puede ver en la ruta /products/:id

//*   1.  Resolver un ítem con promesa en 3 segs y guardar en state local
//*   2.  Dar feedback visual de 'loading'
//*   3.  Mandar por props el ítem fetcheado a <ItemDetail />
//*   4.  Conectarlo con <ItemCount /> y un nuevo botón que diga 'Buy'

export const ItemView = () => {
  const cleanButtonStyle = {
    background: 'none',
    color: 'inherit',
    border: 'none',
    padding: 0,
    font: 'inherit',
    cursor: 'pointer',
    outline: 'inherit',
  };

  const articleMockData = {
    id: '4',
    artist: 'Aminé',
    albumTitle: 'Limbo',
    albumArt:
      'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_600/fl_lossy,pg_1/lllxnrwfcp892q8tcbyx/amine-limbo',
    releaseYear: 2020,
    price: '$4.999',
  };

  const [article, setArticle] = useState();
  const [fetching, setFetching] = useState(true);

  const getArticle = new Promise((res, rej) => {
    setTimeout(() => {
      setArticle(articleMockData);
      setFetching(false);
      res();
      // res(articleMockData);
    }, 3000);
  });

  useEffect(() => {
    getArticle
      .then(() => console.log('resolved'))
      .catch(() => console.log('rejected'));
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //?   Agarrar params desde la url con react-router-dom. Lo dejo de ejemplo
  // const { id } = useParams();

  return (
    <>
      <NavBar />
      <h1 style={{ color: '#1D3557', textAlign: 'center' }}>Item Detail</h1>
      {fetching ? (
        <p style={{ color: '#1D3557', textAlign: 'center' }}>
          Loading article...
        </p>
      ) : (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            color: '#1D3557',
          }}
          data-testid='item-detail-container'
        >
          <ItemDetail article={article} />
          <ItemCount
            initial={1}
            min={1}
            max={10}
            article={`${article.albumTitle} by ${article.artist}`}
          />
          <button
            style={{
              ...cleanButtonStyle,
              height: '1.5rem',
              margin: 'auto',
              marginTop: '0.5vh',
              backgroundColor: '#F1FAEE',
              border: '1px solid #A8DADC',
              borderRadius: '0.5em',
              width: '27.5vw',
            }}
            className='add-to-cart-button'
          >
            Buy
          </button>
        </div>
      )}
    </>
  );
};

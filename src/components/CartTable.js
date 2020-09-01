import React from 'react';
import PropTypes from 'prop-types';

export const CartTable = ({ articles }) => {
  const cleanButtonStyle = {
    background: 'none',
    color: 'inherit',
    border: 'none',
    padding: 0,
    font: 'inherit',
    cursor: 'pointer',
    outline: 'inherit',
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <table
        style={{
          border: '2px solid purple',
        }}
      >
        <tr
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '80vw',
            border: '2px solid pink',
          }}
        >
          <th style={{ width: '40vw', textAlign: 'left' }}>Product</th>
          <th style={{ width: '10vw', border: '1px solid pink' }}>Price</th>
          <th style={{ width: '10vw', border: '1px solid pink' }}>Quantity</th>
          <th style={{ width: '10vw', border: '1px solid pink' }}>Remove</th>
          <th style={{ width: '10vw', border: '1px solid pink' }}>Price</th>
        </tr>
        {articles.map(article => (
          <tr
            key={article.id}
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '80vw',
              border: '2px solid pink',
            }}
          >
            <td style={{ width: '40vw', textAlign: 'left' }}>
              {article.artist} - {article.albumTitle}
            </td>
            <td
              style={{
                width: '10vw',
                border: '1px solid pink',
                textAlign: 'center',
              }}
            >
              {article.price}
            </td>
            <td
              style={{
                width: '10vw',
                border: '1px solid pink',
                textAlign: 'center',
              }}
            >
              {article.amount}
            </td>
            <td
              style={{
                width: '10vw',
                border: '1px solid pink',
                textAlign: 'center',
              }}
            >
              <button
                style={{ ...cleanButtonStyle }}
                aria-label='remove item from cart'
                //TODO  handle onClick to remove item
              >
                <span role='img' aria-label='red cross mark emoji'>
                  ❌
                </span>
              </button>
            </td>
            <td
              style={{
                width: '10vw',
                border: '1px solid pink',
                textAlign: 'center',
              }}
            >
              {/* 
              //TODO    modify price key to be a number
               */}
              $
              {(
                Number(article.price.split('$')[1].trim()) * article.amount
              ).toFixed(3)}
            </td>
          </tr>
        ))}
        <tfoot style={{ textAlign: 'right' }}>
          {/* 
          //TODO    total price
          <p>
            {Number(
              articles.map(article =>
                (article.price.split('$')[1].trim() * article.amount).toFixed(3)
              )
            )}
          </p> */}
          <button
            style={{
              ...cleanButtonStyle,
              height: '2rem',
              margin: 'auto',
              padding: '0 0.5rem',
              marginTop: '0.5vh',
              backgroundColor: '#F1FAEE',
              border: '1px solid #A8DADC',
              borderRadius: '0.5em',
            }}
            className='add-to-cart-button'
          >
            Check Out
          </button>
        </tfoot>
      </table>
    </div>
  );
};

CartTable.propTypes = {
  articles: PropTypes.array,
};

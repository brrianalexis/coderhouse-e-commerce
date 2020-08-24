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
        border: '2px solid green',
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
        {/* map sobre artículos en carrito */}
        <tr
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '80vw',
            border: '2px solid pink',
          }}
        >
          <td style={{ width: '40vw', textAlign: 'left' }}>
            Rejjie Snow - Dear Annie
          </td>
          <td
            style={{
              width: '10vw',
              border: '1px solid pink',
              textAlign: 'center',
            }}
          >
            $4.499
          </td>
          <td
            style={{
              width: '10vw',
              border: '1px solid pink',
              textAlign: 'center',
            }}
          >
            1
          </td>
          <td
            style={{
              width: '10vw',
              border: '1px solid pink',
              textAlign: 'center',
            }}
          >
            ❌
          </td>
          <td
            style={{
              width: '10vw',
              border: '1px solid pink',
              textAlign: 'center',
            }}
          >
            $4.499
          </td>
        </tr>
        <tfoot style={{ textAlign: 'right' }}>
          <p>Subtotal $4.499</p>
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

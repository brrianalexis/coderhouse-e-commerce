import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFirebase } from '../firebase/useFirebase';

export const CheckoutForm = ({ articles, totalPrice }) => {
  const [formValues, setFormValues] = useState({
    name: null,
    phone: null,
    email: null,
    'repeat-email': null,
  });
  const [order, setOrder] = useState({
    placed: false,
    id: null,
  });

  const cleanButtonStyle = {
    background: 'none',
    color: 'inherit',
    border: 'none',
    padding: 0,
    font: 'inherit',
    cursor: 'pointer',
    outline: 'inherit',
  };

  const { createOrder } = useFirebase();

  const handleInputs = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (items, subtotal, buyerInfo) => {
    const isValid =
      formValues.email !== null &&
      formValues.email.length >= 7 &&
      formValues['repeat-email'] === formValues.email;
    if (isValid) {
      try {
        const orderId = await createOrder(items, subtotal, buyerInfo);
        setOrder({
          placed: true,
          id: orderId,
        });
      } catch (error) {
        alert('Se pudrió todo');
      }
    }
  };

  return (
    <div
      style={{
        height: '30%',
        marginBottom: '2rem',
        flexDirection: 'column',
      }}
    >
      <form
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          // height: '20vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'column',
            margin: '0 5rem',
          }}
        >
          <label id='full-name'>Full name</label>
          <input
            type='text'
            style={{
              width: '15rem',
            }}
            name='name'
            placeholder='Full name'
            aria-labelledby='full-name'
            value={formValues.name}
            onChange={e => handleInputs(e)}
          />
          <label id='phone'>Phone number</label>
          <input
            type='number'
            style={{
              width: '15rem',
            }}
            name='phone'
            aria-labelledby='phone'
            placeholder='+549...'
            value={formValues.phone}
            onChange={e => handleInputs(e)}
          />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'column',
            margin: '0 5rem',
          }}
        >
          <label id='email'>E-mail</label>
          <input
            type='text'
            style={{
              width: '15rem',
            }}
            placeholder='E-mail'
            name='email'
            aria-labelledby='email'
            value={formValues.email}
            onChange={e => handleInputs(e)}
          />
          <label id='repeat-email'>Repeat your e-mail</label>
          <input
            type='text'
            style={{
              width: '15rem',
            }}
            placeholder='E-mail'
            name='repeat-email'
            aria-labelledby='repeat-email'
            value={formValues['repeat-email']}
            onChange={e => handleInputs(e)}
          />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'column',
          }}
        >
          <button
            style={{
              ...cleanButtonStyle,
              height: '2rem',
              margin: 'auto',
              padding: '0 0.5rem',
              backgroundColor: '#F1FAEE',
              border: '1px solid #A8DADC',
              borderRadius: '0.5em',
            }}
            className='add-to-cart-button'
            type='submit'
            // disabled={!emailIsValid}
            onClick={e => {
              e.preventDefault();
              // handleEmail();
              handleSubmit(articles, totalPrice, formValues);
            }}
          >
            Place order
          </button>
        </div>
      </form>
      {order.placed ? (
        <div
          style={{
            margin: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Thanks for shopping with us, {formValues.name}! Your order ID is{' '}
          {order.id}
        </div>
      ) : null}
    </div>
  );
};

CheckoutForm.propTypes = {
  articles: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

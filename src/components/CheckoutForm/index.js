import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFirebase } from '../../firebase/useFirebase';

export const CheckoutForm = ({ items, subtotal }) => {
  const [formValues, setFormValues] = useState({
    name: null,
    phone: null,
    email: null,
    'repeat-email': null,
  });
  const [order, setOrder] = useState({
    placed: false,
    id: null,
    name: null,
  });

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
      formValues.email.length > 7 &&
      formValues['repeat-email'] === formValues.email;
    if (isValid) {
      try {
        const { id, name } = await createOrder(items, subtotal, buyerInfo);
        setOrder({
          placed: true,
          id: id,
          name: name,
        });
      } catch (err) {
        alert('Oops!', err);
      }
    }
  };

  return (
    <div className='w-full flex-col m-auto p-4'>
      <form className='flex justify-center items-center flex-row'>
        <div className='w-3/4 flex justify-evenly items-center mx-8'>
          <div className='w-1/3 flex flex-col'>
            <label
              className='block text-font text-sm text-left font-bold mb-2'
              id='full-name'
            >
              Full name
            </label>
            <input
              className='shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              name='name'
              placeholder='Full name'
              aria-labelledby='full-name'
              value={formValues.name}
              onChange={e => handleInputs(e)}
            />
            <label
              className='block text-font text-sm text-left font-bold my-2'
              id='phone'
            >
              Phone number
            </label>
            <input
              className='shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='number'
              name='phone'
              aria-labelledby='phone'
              placeholder='+549...'
              value={formValues.phone}
              onChange={e => handleInputs(e)}
            />
          </div>
          <div className='w-1/3 flex flex-col'>
            <label
              className='block text-font text-sm text-left font-bold mb-2'
              id='email'
            >
              E-mail
            </label>
            <input
              className='shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='email'
              placeholder='E-mail'
              name='email'
              aria-labelledby='email'
              value={formValues.email}
              onChange={e => handleInputs(e)}
            />
            <label
              className='block text-font text-sm text-left font-bold my-2'
              id='repeat-email'
            >
              Repeat your e-mail
            </label>
            <input
              className='shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='email'
              placeholder='E-mail'
              name='repeat-email'
              aria-labelledby='repeat-email'
              value={formValues['repeat-email']}
              onChange={e => handleInputs(e)}
            />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <button
            className='h-8 m-auto ml- text-font transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:text-primary'
            type='submit'
            onClick={e => {
              e.preventDefault();
              handleSubmit(items, subtotal, formValues);
            }}
          >
            Place Order
          </button>
        </div>
      </form>
      {order.placed ? (
        //*   esto era un div, just in case
        <p className='flex justify-center items-center mx-8 mt-4 text-font'>
          Thanks for shopping wih us, {order.name}! Your order ID is {order.id}
        </p>
      ) : null}
    </div>
  );
};

CheckoutForm.propTypes = {
  items: PropTypes.array.isRequired,
  subtotal: PropTypes.number.isRequired,
};

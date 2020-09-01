import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({ value, children }) => {
  const [items, setItems] = useState(value);
  const [count, setCount] = useState(0);

  const addItems = (item, amount) => {
    if (items.some(i => i.id === item.id)) {
      const repeatedIndex = items.findIndex(el => el.id === item.id);
      const itemsCopy = [...items];
      itemsCopy[repeatedIndex] = {
        ...itemsCopy[repeatedIndex],
        amount: itemsCopy[repeatedIndex].amount + amount,
      };
      setItems([itemsCopy]);
    } else {
      setItems([
        ...items,
        {
          ...item,
          amount,
        },
      ]);
    }
    setCount(count + amount);
  };

  return (
    <CartContext.Provider value={{ items, addItems, count }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  value: PropTypes.array,
  children: PropTypes.element,
};

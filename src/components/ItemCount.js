import React from 'react';
import { Add, Subtract } from 'grommet-icons';
import PropTypes from 'prop-types';
import './styles.css';

const cleanButtonStyle = {
  background: 'none',
  color: 'inherit',
  border: 'none',
  padding: 0,
  font: 'inherit',
  cursor: 'pointer',
  outline: 'inherit',
};

const containerStyles = {
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'space-around',
};

const inputStyles = {
  width: '10vw',
  height: '2rem',
  border: 'none',
  boxSizing: 'border-box',
  textAlign: 'center',
  backgroundColor: 'inherit',
};

const CustomInput = ({
  addClick,
  subtractClick,
  value = 2,
  min,
  max,
  onCountChange,
}) => {
  return (
    <div style={containerStyles} data-testid='add-subtract-container'>
      <button
        style={cleanButtonStyle}
        onClick={subtractClick}
        disabled={value <= min}
        data-testid='subtract-button'
      >
        <Subtract
          className='add-to-cart-icons'
          color='#457B9D'
          data-testid='subtract-icon'
        />
      </button>
      <input
        style={inputStyles}
        value={value}
        type='number'
        min={min}
        max={max}
        onChange={e => onCountChange(e)}
        disabled
        data-testid='article-counter-input'
      />
      <button
        style={cleanButtonStyle}
        onClick={addClick}
        disabled={value >= max}
        data-testid='add-button'
      >
        <Add
          className='add-to-cart-icons'
          color='#457B9D'
          data-testid='add-icon'
        />
      </button>
    </div>
  );
};

export const ItemCount = ({
  min,
  max,
  article = 'Article name',
  count,
  setCount,
  onCountChange,
}) => {
  const isValidAmount = min <= count <= max;

  const onAdd = count => {
    isValidAmount
      ? alert(`${count} ${article} added to your cart!`)
      : alert(
          `Invalid ${article} amount. You must add between ${min} and ${max} to your cart`
        );
  };

  return (
    <div
      data-testid='article-counter-container'
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '30vw',
      }}
    >
      <div
        data-testid='article-counter'
        style={{
          backgroundColor: '#F1FAEE',
        }}
      >
        <CustomInput
          addClick={() => {
            setCount(count + 1);
          }}
          subtractClick={() => {
            setCount(count - 1);
          }}
          value={count}
          min={min}
          max={max}
          onCountChange={e => onCountChange(e)}
        />
      </div>
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
        data-testid='add-to-cart-button'
        onClick={() => onAdd(count, article)}
        disabled={!isValidAmount}
      >
        Add to cart
      </button>
    </div>
  );
};

CustomInput.propTypes = {
  addClick: PropTypes.func.isRequired,
  subtractClick: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onCountChange: PropTypes.func.isRequired,
};

ItemCount.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  article: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  onCountChange: PropTypes.func.isRequired,
};

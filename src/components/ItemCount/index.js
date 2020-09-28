import React from 'react';
import PropTypes from 'prop-types';

const AddOrSubtract = ({
  addClick,
  subtractClick,
  value,
  min,
  max,
  onCountChange,
}) => {
  return (
    <div className='flex items-center justify-between p-2 w-1/6 text-font'>
      <button onClick={subtractClick} disabled={value <= min}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='h-4 text-font'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M20 12H4'
          />
        </svg>
      </button>
      <input
        className='w-8 h-8 text-center'
        type='number'
        value={value}
        min={min}
        max={max}
        onChange={e => onCountChange(e)}
        disabled
      />
      <button onClick={addClick} disabled={value >= max}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='h-5 text-font'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
          />
        </svg>
      </button>
    </div>
  );
};

export const ItemCount = ({ min, max, count, setCount, onCountChange }) => {
  return (
    <AddOrSubtract
      addClick={() => setCount(count + 1)}
      subtractClick={() => setCount(count - 1)}
      value={count}
      min={min}
      max={max}
      onCountChange={e => onCountChange(e)}
    />
  );
};

AddOrSubtract.propTypes = {
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
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  onCountChange: PropTypes.func.isRequired,
};

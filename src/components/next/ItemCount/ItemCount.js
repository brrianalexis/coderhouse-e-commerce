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
    <div>
      <button onClick={subtractClick} disabled={value <= min}>
        -
      </button>
      <input
        type='number'
        value={value}
        min={min}
        max={max}
        onChange={e => onCountChange(e)}
        disabled
      />
      <button onClick={addClick} disabled={value >= max}>
        +
      </button>
    </div>
  );
};

export const ItemCount = ({ min, max, count, setCount, onCountChange }) => {
  return (
    <div>
      <div>
        <AddOrSubtract
          addClick={() => setCount(count + 1)}
          subtractClick={() => setCount(count - 1)}
          value={count}
          min={min}
          max={max}
          onCountChange={e => onCountChange(e)}
        />
      </div>
    </div>
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
  article: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  onCountChange: PropTypes.func.isRequired,
};

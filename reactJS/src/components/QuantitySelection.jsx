import React from 'react';

const QuantitySelection = ({ quantity, onQuantityChange }) => {
  const handleMinus = () => {
    if (quantity > 0) {
      onQuantityChange(quantity - 1);
    }
  };

  const handlePlus = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <div className="quantity-controls">
      <button
        className="quantity-btn minus"
        onClick={handleMinus}
        style={{ opacity: quantity === 0 ? '0.5' : '1' }}
      >
        -
      </button>
      <p className="quantity">{quantity}</p>
      <button className="quantity-btn plus" onClick={handlePlus}>
        +
      </button>
    </div>
  );
};

export default QuantitySelection;

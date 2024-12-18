import React from 'react';

const SizeSelection = ({ selectedSize, onSizeChange }) => {
  const sizes = [
    { label: 'S', value: 's', price: '$69' },
    { label: 'M', value: 'm', price: '$79' },
    { label: 'L', value: 'l', price: '$89' },
    { label: 'XL', value: 'xl', price: '$99' },
  ];

  return (
    <div className="size-section">
      <h3 className="font-bold">Wrist Size</h3>
      <div className="size-options">
        {sizes.map((size) => (
          <label key={size.value} className="size-option">
            <input
              type="radio"
              name="size"
              value={size.value}
              checked={selectedSize === size.value}
              onChange={() => onSizeChange(size.value)}
            />
            <div className="size-label-container">
              <p className="size-label">
                {size.label} <span className="size-price">{size.price}</span>
              </p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SizeSelection;

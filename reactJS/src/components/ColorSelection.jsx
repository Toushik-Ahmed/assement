import React from 'react';

const ColorSelection = ({ selectedColor, onColorChange }) => {
  const colors = ['purple', 'cyan', 'blue', 'black'];

  return (
    <div className="color-section">
      <h3>
        {' '}
        <strong> Band Color</strong>
      </h3>
      <div className="band-colors">
        {colors.map((color) => (
          <button
            key={color}
            className={`color-btn ${color} ${
              selectedColor === color ? 'active' : ''
            }`}
            data-color={color}
            onClick={() => onColorChange(color)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelection;

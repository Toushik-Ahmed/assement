import React from 'react';

const ProductImage = ({ selectedColor }) => {
  return (
    <div className="product-image">
      <img
        src={`../../assets/${selectedColor}.jpeg`}
        alt="Classy Modern Smart Watch"
        id="main-thumbnail"
      />
    </div>
  );
};

export default ProductImage;

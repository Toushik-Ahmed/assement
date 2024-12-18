import React, { useState } from 'react';
import ColorSelection from './ColorSelection';

import QuantitySelection from './QuantitySelection';
import SizeSelection from './SizeSelection';

const ProductDetails = ({
  onAddToCart,
  selectedColor,
  setSelectedColor,
  openCartModal,
  cartItemCount,
  setCheckOutBtn,
  checkOutBtn,
}) => {
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState('s');
  const [wishlist, setWishlist] = useState(false);

  const handleAddToCart = () => {
    if (quantity > 0) {
      const price = {
        s: '$69',
        m: '$79',
        l: '$89',
        xl: '$99',
      }[selectedSize];

      const itemDetails = {
        name: 'Classy Modern Smart watch',
        color: selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1),
        size: selectedSize.toUpperCase(),
        quantity: quantity,
        price: price,
        img: `/assets/${selectedColor}.jpeg`,
      };

      onAddToCart(itemDetails);
      setCheckOutBtn(true);
      console.log('button clicked', checkOutBtn);

      setQuantity(0);
    }
  };

  return (
    <div className="product-details-container">
      <div className="product-details">
        <h1 className="product-title">Classy Modern Smart watch</h1>

        <div class="rating-container">
          <div class="stars">
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <div class="half-star-container">
              <span class="star empty">★</span>
              <div class="half-star-overlay">
                <span class="star">★</span>
              </div>
            </div>
            <span class="star empty">★</span>
          </div>
          <span class="reviews-count">(2 Reviews)</span>
        </div>

        <div className="price">
          <span className="original-price">$99.00</span>
          <span className="discounted-price">$79.00</span>
        </div>

        <p className="description">
          I must explain to you how all this mistaken idea of denouncing
          pleasure praising pain was born and I will give you a complete account
          of the system, and expound the actual teaching.
        </p>

        <div className="product-meta">
          <div className="meta-item">
            <span className="label">Type</span>
            <span className="value">
              <strong>Watch</strong>
            </span>
          </div>
          <div className="meta-item">
            <span className="label">Model Number</span>
            <span className="value">
              <strong>Forerunner 290XT</strong>
            </span>
          </div>
        </div>

        <ColorSelection
          selectedColor={selectedColor}
          onColorChange={setSelectedColor}
        />

        <SizeSelection
          selectedSize={selectedSize}
          onSizeChange={setSelectedSize}
        />

        <div className="cart-actions">
          <QuantitySelection
            quantity={quantity}
            onQuantityChange={setQuantity}
          />
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button
            className="wishlist-btn"
            onClick={() => setWishlist(!wishlist)}
          >
            {wishlist ? '♥' : '♡'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import React, { useState } from 'react';
import './App.css';
import CartModal from './components/CartModal';
import ProductDetails from './components/ProductDetails';
import ProductImage from './components/ProductImage';

function App() {
  const [selectedColor, setSelectedColor] = useState('purple');
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [checkoutBtn, setCheckOutBtn] = useState(false);

  const handleAddToCart = (itemDetails) => {
    setCartItems((prevItems) => [...prevItems, itemDetails]);
  };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-[92px]">
      <div className="product-container">
        <ProductImage selectedColor={selectedColor} />
        <ProductDetails
          onAddToCart={handleAddToCart}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          openCartModal={() => setShowModal(true)}
          cartItemCount={calculateTotalQuantity()}
          setCheckOutBtn={setCheckOutBtn}
          checkOutBtn={checkoutBtn}
        />

        {showModal && (
          <CartModal
            cartItems={cartItems}
            onClose={() => {
              setShowModal(false), setCheckOutBtn(true);
            }}
          />
        )}
      </div>

      {checkoutBtn && cartItems.length > 0 ? (
        <button
          onClick={() => {
            setShowModal(true), setCheckOutBtn(false);
          }}
          className="checkoutBtn"
        >
          Checkout{' '}
          <span className="selectedItem">{calculateTotalQuantity()}</span>
        </button>
      ) : null}
    </div>
  );
}

export default App;

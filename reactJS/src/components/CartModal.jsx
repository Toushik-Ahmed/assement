import React from 'react';

const CartModal = ({ cartItems, onClose }) => {
  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + parseFloat(item.price.replace('$', '')) * item.quantity;
  }, 0);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal-content cart-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Your Cart</h3>
        <div className="cart-items">
          <table>
            <thead>
              <tr>
                <th className="cart-header">Item</th>
                <th>Color</th>
                <th>Size</th>
                <th>Qnt</th>
                <th id="cart-header-price">Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td className="item-cell">
                    <img
                      src={item.img}
                      alt={item.color}
                      className="cart-thumbnail"
                    />
                    <span>{item.name}</span>
                  </td>
                  <td>{item.color}</td>
                  <td className="cart-item">{item.size}</td>
                  <td className="cart-item">{item.quantity}</td>
                  <td id="cart-item-price">
                    $
                    {(parseInt(item.price.slice(1)) * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
              <tr className="total-row">
                <td colSpan="3" className="total-label">
                  Total
                </td>
                <td>
                  <strong>{totalQuantity}</strong>
                </td>
                <td id="total-price">
                  <strong>${totalPrice.toFixed(2)}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="cart-actions-modal">
          <button className="continue-shopping" onClick={onClose}>
            Continue Shopping
          </button>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;

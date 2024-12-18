document.addEventListener('DOMContentLoaded', () => {
  const mainThumbnail = document.getElementById('main-thumbnail');
  const colorButtons = document.querySelectorAll('.color-btn');
  const addToCartBtn = document.querySelector('.add-to-cart-btn');
  const checkoutBtn = document.querySelector('.checkoutBtn');
  const selectedItem = document.querySelector('.selectedItem');
  const quantityDisplay = document.querySelector('.quantity');
  const quantityMinus = document.querySelector('.quantity-btn.minus');
  const quantityPlus = document.querySelector('.quantity-btn.plus');
  const wishlistBtn = document.querySelector('.wishlist-btn');

  let cartCount = 0;
  let cartItems = [];
  let quantity = 0;

  mainThumbnail.src = './assets/purple.jpeg';

  checkoutBtn.style.display = 'none';

  colorButtons.forEach((button) => {
    button.addEventListener('click', () => {
      colorButtons.forEach((btn) => btn.classList.remove('active'));

      button.classList.add('active');

      const color = button.dataset.color;
      mainThumbnail.src = `./assets/${color}.jpeg`;
    });
  });

  const updateQuantityDisplay = () => {
    quantityDisplay.textContent = quantity;

    quantityMinus.style.opacity = quantity === 0 ? '0.5' : '1';
  };

  quantityMinus.addEventListener('click', () => {
    if (quantity > 0) {
      quantity--;
      updateQuantityDisplay();
    }
  });

  quantityPlus.addEventListener('click', () => {
    quantity++;
    updateQuantityDisplay();
  });

  wishlistBtn.addEventListener('click', () => {
    wishlistBtn.textContent = wishlistBtn.textContent === '♡' ? '♥' : '♡';
  });

  addToCartBtn.addEventListener('click', () => {
    if (quantity > 0) {
      const selectedColor =
        document.querySelector('.color-btn.active').dataset.color;
      const selectedSize = document.querySelector(
        'input[name="size"]:checked'
      ).value;
      const price = document.querySelector(
        'input[name="size"]:checked + .size-label-container .size-price'
      ).textContent;

      cartCount += quantity;
      selectedItem.textContent = cartCount;

      cartItems.push({
        name: 'Classy Modern Smart watch',
        color: selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1),
        size: selectedSize.toUpperCase(),
        quantity: quantity,
        price: price,
        img: `./assets/${selectedColor}.jpeg`,
      });

      quantity = 0;
      updateQuantityDisplay();

      checkoutBtn.style.display = 'flex';
    }
  });

  checkoutBtn.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.className = 'modal';

    const totalPrice = cartItems.reduce((sum, item) => {
      return sum + parseFloat(item.price.replace('$', '')) * item.quantity;
    }, 0);

    const totalQuantity = cartItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    const modalContent = `
      <div class="modal-content cart-modal">
        <h3>Your Cart</h3>
        <div class="cart-items">
          <table>
            <thead>
              <tr >
                <th class="cart-header">Item</th>
                <th>Color</th>
                <th>Size</th>
                <th>Qnt</th>
                <th id="cart-header-price">Price</th>
              </tr>
            </thead>
            <tbody>
              ${cartItems
                .map(
                  (item) => `
                <tr>
                  <td class="item-cell">
                    <img src="${item.img}" alt="${
                    item.color
                  }" class="cart-thumbnail">
                    <span>${item.name}</span>
                  </td>
                  <td>${item.color}</td>
                  <td class="cart-item">${item.size}</td>
                  <td class="cart-item">${item.quantity}</td>
                 <td  id="cart-item-price">$${parseInt(
                   item.price.slice(1)
                 ).toFixed(2)}</td>
                </tr>
              `
                )
                .join('')}
              <tr class="total-row">
                <td colspan="3" class="total-label">Total</td>
                <td ><strong>${totalQuantity}</strong></td>
                <td id="total-price"><strong>$${totalPrice.toFixed(
                  2
                )}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cart-actions-modal">
          <button class="continue-shopping">Continue Shopping</button>
          <button class="checkout">Checkout</button>
        </div>
      </div>
    `;

    modal.innerHTML = modalContent;
    document.body.appendChild(modal);

    checkoutBtn.style.display = 'none';

    const closeModal = () => {
      modal.remove();

      checkoutBtn.style.display = 'flex';
    };

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  });
});

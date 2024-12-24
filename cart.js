// const cart = [];

// function addToCart(product) {
//   cart.push(product);
// }

// function removeFromCart(id) {
//   const index = cart.findIndex((p) => p.id === id);
//   if (index !== -1) {
//     cart.splice(index, 1);
//   } else {
//     throw new Error("Product not found in cart");
//   }
// }

// function clearCart() {
//   cart.length = 0;
// }

// function calculateTotal() {
//   return cart.reduce((total, item) => total + item.price, 0);
// }

// module.exports = { addToCart, removeFromCart, clearCart, calculateTotal, cart };




// تخزين السلة في الـ LocalStorage إذا كانت موجودة
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// عرض المنتجات في السلة
function displayCartItems() {
  const cartItemsContainer = document.getElementById('cartItems');
  let total = 0;
  cartItemsContainer.innerHTML = '';

  cart.forEach((item, index) => {
    total += item.price;
    const cartItem = `
      <tr>
        <td><img src="${item.image}" alt="${item.name}" width="100"></td>
        <td>${item.name}</td>
        <td>$${item.price}</td>
        <td><button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button></td>
      </tr>
    `;
    cartItemsContainer.innerHTML += cartItem;
  });

  document.getElementById('totalPrice').textContent = `Total Price: $${total}`;
}

// إزالة منتج من السلة
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
}

// مسح السلة بالكامل
function clearCart() {
  localStorage.removeItem('cart');
  displayCartItems();
}

displayCartItems();


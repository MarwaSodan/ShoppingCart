const { addProduct, updateProduct, deleteProduct, checkStock, products } = require('./products');
const { addToCart, removeFromCart, clearCart, calculateTotal, cart } = require('./cart');

// أمثلة على استخدام الدوال
addProduct({ id: 1, name: 'Laptop', price: 1000, stock: 5 });
addProduct({ id: 2, name: 'Phone', price: 500, stock: 10 });

console.log('All Products:', products);

addToCart({ id: 1, name: 'Laptop', price: 1000 });
addToCart({ id: 2, name: 'Phone', price: 500 });

console.log('Cart Items:', cart);
console.log('Total Price:', calculateTotal());

clearCart();
console.log('Cart after clearing:', cart);



// login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email }));
      window.location.href = 'products.html'; // الانتقال للصفحة الرئيسية
    } else {
      alert('Please enter your email and password!');
    }
  });
  
  // التحقق إذا كان المستخدم مسجل الدخول بالفعل:
  if (localStorage.getItem('user')) {
    window.location.href = 'products.html'; // إعادة التوجيه إلى الصفحة الرئيسية
  }


//   Product
const products = [
    { id: 1, name: "Product 1", image: "https://via.placeholder.com/150", description: "Description 1", price: 100 },
    { id: 2, name: "Product 2", image: "https://via.placeholder.com/150", description: "Description 2", price: 200 },
    { id: 3, name: "Product 3", image: "https://via.placeholder.com/150", description: "Description 3", price: 300 },
  ];
  
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // التحقق من تسجيل الدخول
  if (!localStorage.getItem('user')) {
    alert('Please log in first!');
    window.location.href = 'login.html';
  }
  
  // عرض المنتجات في الصفحة الرئيسية
  function displayProducts() {
    const productList = document.getElementById('productList');
    products.forEach((product) => {
      const productCard = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text">Price: $${product.price}</p>
              <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
          </div>
        </div>
      `;
      productList.innerHTML += productCard;
    });
  }
  
  // إضافة منتج إلى السلة
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  }
  
  displayProducts();

  



//   Shopping Cart Page
// التحقق من تسجيل الدخول
if (!localStorage.getItem('user')) {
    alert('Please log in first!');
    window.location.href = 'login.html';
  }
  
  // عرض المنتجات في السلة
  function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    let total = 0;
  
    cartItemsContainer.innerHTML = '';
    cartItems.forEach((item, index) => {
      total += item.price;
      const cartItem = `
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${item.image}" class="img-fluid rounded-start" alt="${item.name}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <p class="card-text">Price: $${item.price}</p>
                <button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button>
              </div>
            </div>
          </div>
        </div>
      `;
      cartItemsContainer.innerHTML += cartItem;
    });
  
    document.getElementById('totalPrice').textContent = `Total Price: $${total}`;
  }
  
  // إزالة منتج من السلة
  function removeFromCart(index) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCartItems();
  }
  
  // مسح السلة بالكامل
  function clearCart() {
    localStorage.removeItem('cart');
    displayCartItems();
  }
  
  displayCartItems();

  
//   logout
// عرض اسم المستخدم
const user = JSON.parse(localStorage.getItem('user'));
if (!user) {
  window.location.href = 'login.html';
} else {
  document.getElementById('userEmail').textContent = user.email;
}

// تسجيل الخروج
function logout() {
  localStorage.removeItem('user');
  window.location.href = 'login.html';
}


// add product
function showToast(message) {
    const toastBody = document.querySelector("#liveToast .toast-body");
    toastBody.textContent = message;
  
    const toast = new bootstrap.Toast(document.getElementById("liveToast"));
    toast.show();
  }
  
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    showToast('Product added to cart successfully!');
  }

  
//   delete product
function removeFromCart(index) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    showToast('Product removed from cart successfully!');
    displayCartItems();
  }
  

  // التحقق إذا كان المستخدم قد سجل الدخول
if (!localStorage.getItem('loggedIn')) {
  // إذا لم يسجل الدخول، يتم توجيه المستخدم إلى صفحة تسجيل الدخول
  window.location.href = "login.html"; 
}

// هنا يمكن إضافة منطق عرض المنتجات
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    // حفظ حالة تسجيل الدخول في localStorage
    localStorage.setItem('loggedIn', 'true');
    window.location.href = "products.html"; // الانتقال إلى صفحة المنتجات
  } else {
    alert("Please fill in both fields.");
  }
});

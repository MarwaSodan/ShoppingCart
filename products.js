// const products = [];

// function addProduct(product) {
//   products.push(product);
// }

// function updateProduct(id, newDetails) {
//   const product = products.find((p) => p.id === id);
//   if (product) {
//     Object.assign(product, newDetails);
//   } else {
//     throw new Error("Product not found");
//   }
// }

// function deleteProduct(id) {
//   const index = products.findIndex((p) => p.id === id);
//   if (index !== -1) {
//     products.splice(index, 1);
//   } else {
//     throw new Error("Product not found");
//   }
// }

// function checkStock(id) {
//   const product = products.find((p) => p.id === id);
//   if (product) {
//     return product.stock > 0;
//   } else {
//     throw new Error("Product not found");
//   }
// }

// module.exports = { addProduct, updateProduct, deleteProduct, checkStock, products };






const products = [
    { id: 1, name: "Product 1", image: "https://cdn.chefaa.com/filters:format(webp)/public/uploads/products/hero-baby-1-milk-400-gm-01724071518.png", description: "Description 1", price: 100 },
    { id: 2, name: "Product 2", image: "https://wolfsmercantile.com/wp/wp-content/uploads/2021/12/best2.jpg", description: "Description 2", price: 200 },
    { id: 3, name: "Product 3", image: "https://lh6.googleusercontent.com/proxy/KS-qjfu7ysqHCJmNyjidhTfl9TkAw8YsDrz4-jw7ZxaTkDs3s-U1X8ABNy-bAl3DFv1qbIJe531tNT5ac0IkJUfIsVYy73Eqmme2PGPNPzLWrMPASrQ", description: "Description 3", price: 300 }
  ];
  
  // تخزين السلة في الـ LocalStorage إذا كانت موجودة
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
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
  

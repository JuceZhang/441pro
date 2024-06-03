document.addEventListener('DOMContentLoaded', function() {
    // 初始化购物车
    let cart = [];
    
    // 添加购物车功能
    function addToCart(productId) {
    let product = findProductById(productId);
    if (!product) return; // 产品不存在
    cart.push(product);
    updateCartUI();
    }
    
    // 更新购物车 UI
    function updateCartUI() {
    const cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.innerHTML = '';
    cart.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${item.imageUrl}" alt="${item.name}" width="100">
    <h3>${item.name}</h3>
    <p>$${item.price}</p>
    <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartItemsElement.appendChild(div);
    });
    }
    
    // 从购物车中移除商品
    function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    }
    
    // 查找产品
    function findProductById(productId) {
    // 假设我们有一个名为 'products' 的数组，包含所有产品的数据
    return products.find(product => product.id === productId);
    }
    
    // 假设的产品数据
    const products = [
    { id: 1, name: 'Product 1', price: 9.99, imageUrl: 'path/to/product1.jpg' },
    { id: 2, name: 'Product 2', price: 19.99, imageUrl: 'path/to/product2.jpg' },
    // ...更多产品
    ];
    
    // 绑定事件
    document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
    const productId = this.getAttribute('data-product-id');
    addToCart(productId);
    });
    });
    });
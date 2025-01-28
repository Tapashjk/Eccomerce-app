// Shared Cart Functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const updateCartCount = () => {
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    });
};

const addToCart = (productId, productName, price) => {
    const existing = cart.find(item => item.id === productId);
    if(existing) {
        existing.quantity++;
    } else {
        cart.push({ id: productId, name: productName, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
};

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);
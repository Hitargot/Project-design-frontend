// app.js

document.addEventListener('DOMContentLoaded', () => {
    const apiList = document.getElementById('apis');
    const cartItems = document.getElementById('cart-items');
    const featuredApis = document.getElementById('featured-apis');
    const checkoutButton = document.getElementById('checkout');
    const cartCount = document.getElementById('cart-count');
    const cart = [];

    // Mock data for APIs
    const apis = [
        { id: 1, name: 'Weather API', description: 'Get weather data in real-time.', price: 200 },
        { id: 2, name: 'Finance API', description: 'Access financial data and market trends.', price: 360 },
        { id: 3, name: 'Geolocation API', description: 'Get accurate geolocation data.', price: 12 },
        { id: 4, name: 'Sports API', description: 'Stay updated with the latest sports data.', price: 380 },
        { id: 5, name: 'News API', description: 'Get the latest news from around the world.', price: 160 }
    ];

    // Function to render the list of APIs
    function renderAPIs() {
        apiList.innerHTML = '';
        apis.forEach(api => {
            const apiItem = document.createElement('div');
            apiItem.classList.add('api-item');
            apiItem.innerHTML = `
                <h3>${api.name}</h3>
                <p>${api.description}</p>
                <p>Price: $${api.price}</p>
                <button onclick="addToCart(${api.id})">Add to Cart</button>
            `;
            apiList.appendChild(apiItem);
        });
    }

    // Function to render featured APIs
    function renderFeaturedAPIs() {
        const featured = apis.slice(0, 3); // Select the first three APIs as featured
        featuredApis.innerHTML = '';
        featured.forEach(api => {
            const featuredApi = document.createElement('div');
            featuredApi.classList.add('featured-api');
            featuredApi.innerHTML = `
                <h3>${api.name}</h3>
                <p>${api.description}</p>
                <p>Price: $${api.price}</p>
            `;
            featuredApis.appendChild(featuredApi);
        });
    }

    // Function to add API to cart
    window.addToCart = function(id) {
        const api = apis.find(api => api.id === id);
        if (api) {
            cart.push(api);
            renderCart();
            updateCartCount();
        }
    };

    // Function to render the cart items
    function renderCart() {
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItems.appendChild(cartItem);
        });
    }

    // Function to update cart count
    function updateCartCount() {
        cartCount.innerText = cart.length;
    }

    // Function to remove item from cart
    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        renderCart();
        updateCartCount();
    };

    // Checkout button functionality
    checkoutButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
        } else {
            alert('Proceeding to checkout...');
            // Here you would typically handle the checkout process
        }
    });

    // Initial render of APIs and featured APIs
    renderAPIs();
    renderFeaturedAPIs();
});
let cart = [];

function updateTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    document.getElementById('total-price').innerText = total + " RON";
}

function updateCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <p>${item.name}</p>
                <p>Cantitate: ${item.quantity}</p>
                <p>Preț: ${item.price} RON</p>
                <button class="remove-from-cart" onclick="removeFromCart('${item.name}')">Șterge</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    updateTotal();
}

function addToCart(name, price, image) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }
    updateCartItems();
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCartItems();
}

function testAddToCart() {
    addToCart('Pantaloni de test', 100, 'products/baggy_pantaloni/art001gray.png');
}

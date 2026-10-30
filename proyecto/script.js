let order = [];

function filter(category) {
    const products = document.querySelectorAll('.product');
    const buttons = document.querySelectorAll('.cat-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    products.forEach(product => {
        if (category === 'todos' || product.dataset.cat === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function addToOrder(name, sizeId) {
    let size = 'Única';
    if (sizeId) {
        const select = document.getElementById(sizeId);
        size = select.value;
        if (size === 'Selecciona talla') {
            alert('Por favor selecciona una talla');
            return;
        }
    }

    order.push(`${name} - Talla: ${size}`);
    updateOrderSummary();
}

function updateOrderSummary() {
    const orderItems = document.getElementById('orderItems');
    const pedidoHidden = document.getElementById('pedidoHidden');

    if (order.length === 0) {
        orderItems.innerHTML = 'Aún no has agregado productos.';
        pedidoHidden.value = '';
    } else {
        orderItems.innerHTML = order.map(item => `• ${item}`).join('<br>');
        pedidoHidden.value = order.join('\n');
    }
}

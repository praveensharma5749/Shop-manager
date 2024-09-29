// Function to render products
function renderProduct(product) {
    const productList = document.getElementById('productList');
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>Quantity in Stock: <span class="stock">${product.quantity}</span></p>
        </div>
        <div class="inline-buttons">
            <button class="buy-btn" data-quantity="1">Buy 1</button>
            <button class="buy-btn" data-quantity="2">Buy 2</button>
            <button class="buy-btn" data-quantity="3">Buy 3</button>
        </div>
    `;

    // Add event listeners for buy buttons
    const buyButtons = productDiv.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buyQuantity = parseInt(this.getAttribute('data-quantity'));
            const stockSpan = productDiv.querySelector('.stock');
            let currentStock = parseInt(stockSpan.textContent);

            if (currentStock >= buyQuantity) {
                currentStock -= buyQuantity;
                stockSpan.textContent = currentStock;
            } else {
                alert('Not enough stock available.');
            }
        });
    });

    // Append product to the list
    productList.appendChild(productDiv);
}

// Handle form submission
document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('productName').value;
    const description = document.getElementById('productDesc').value;
    const quantity = parseInt(document.getElementById('productQuantity').value);
    const price = parseFloat(document.getElementById('productPrice').value);

    const newProduct = {
        name, 
        description, 
        quantity, 
        price
    };

    renderProduct(newProduct);

    // Reset the form
    document.getElementById('productForm').reset();
});

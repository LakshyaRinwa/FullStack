let cartCount = 0;

function updateCartDisplay() {
    const cartCountElement = document.querySelector(' small');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

async function loadProducts() {
    try {
        const response = await fetch('products.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const products = await response.json();
        const productsDiv = document.querySelector('.products');

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            const img = document.createElement('img');
            img.src = product.img;
            img.alt = product.productName;

            const name = document.createElement('h2');
            name.textContent = product.productName;

            const description = document.createElement('p');
            description.textContent = product.productDescription;

            const button = document.createElement('button');
            button.textContent = 'Add to Cart';
            button.addEventListener('click', () => {
                cartCount += 1;
                updateCartDisplay();
            });

            productDiv.appendChild(img);
            productDiv.appendChild(name);
            productDiv.appendChild(description);
            productDiv.appendChild(button);

            productsDiv.appendChild(productDiv);
        });

        updateCartDisplay();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadProducts);

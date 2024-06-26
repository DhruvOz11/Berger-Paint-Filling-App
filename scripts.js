const products = [
    {
        code: 'P001',
        name: 'Product 1',
        description: 'Description for Product 1',
        price: '$10.00',
        images: ['PRO01.png', 'PRO02.jpg']
    },
    {
        code: 'P002',
        name: 'Product 2',
        description: 'Description for Product 2',
        price: '$20.00',
        images: ['PRO02.jpg', 'PRO01.png']
    },
    {
        code: 'P003',
        name: 'Product 3',
        description: 'Description for Product 3',
        price: '$30.00',
        images: ['PRO01.png', 'PRO02.jpg']
    }
];

document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.trim().toUpperCase();
    const productInfo = document.getElementById('product-info');

    const product = products.find(p => p.code === query);

    if (product) {
        productInfo.style.display = 'block';
        productInfo.innerHTML = `
            <img src="${product.images[0]}" class="product-image" alt="${product.name}">
            <img src="${product.images[1]}" class="product-image" alt="${product.name}">
            <div class="product-details">
                <p><strong>Name:</strong> ${product.name}</p>
                <p><strong>Description:</strong> ${product.description}</p>
                <p><strong>Description:</strong> ${product.description}</p>
                <p><strong>Description:</strong> ${product.description}</p>
                <p><strong>Description:</strong> ${product.description}</p>
                <p><strong>Description:</strong> ${product.description}</p>
                <p><strong>Description:</strong> ${product.description}</p>
                <p><strong>Description:</strong> ${product.description}</p>
                <p><strong>Description:</strong> ${product.description}</p>
                <p><strong>Description:</strong> ${product.description}</p>
                <p><strong>Description:</strong> ${product.description}</p>
                <p><strong>Description:</strong> ${product.description}</p>
                <p><strong>Description:</strong> ${product.description}</p>
                <p><strong>Price:</strong> ${product.price}</p>
            </div>
        `;
    } else {
        productInfo.style.display = 'none';
        productInfo.innerHTML = '';
    }
});

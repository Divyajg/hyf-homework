console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

//js2week1-----------------------------------------------------------------------------------------------------------------------------------------------------------
let productList = document.createElement('ul');

const body = document.querySelector('body');

document.body.appendChild(productList);

function renderProducts(products) {

    for (let i = 0; i < products.length; i++) {
        let title = document.createElement('li');
        let price = document.createElement('span');
        let rating = document.createElement('span');

        title.innerHTML = 'Product: ' + products[i].name;
        price.innerHTML = ' Price: ' + products[i].price;
        rating.innerHTML = ' Rating: ' + products[i].rating;

        title.appendChild(price);
        title.appendChild(rating);
        productList.appendChild(title);
    }
}

renderProducts(products); // This should create the ul and the li's with the individual products details

//js2week2------------------------------------------------------------------------------------------------------------------------------------------------------------

const input = document.createElement('input');
document.body.appendChild(input);
input.setAttribute('placeholder', 'Search product');
input.setAttribute('id', 'searchInput')

const priceInput = document.createElement('input');
document.body.appendChild(priceInput);
priceInput.setAttribute('placeholder', 'Set maximum price');
priceInput.setAttribute('id', 'searchByPrice')
priceInput.setAttribute('type', 'number')

const ul = document.createElement('ul');
document.body.appendChild(ul);
ul.setAttribute('id', 'productList');

const ulByPrice = document.createElement('ul');
document.body.appendChild(ulByPrice);
ulByPrice.setAttribute('id', 'productListByPrice');

//--- filter products through product search

function search() {
    const filteredproducts = products.filter((product) => {
        if (product.name.toLowerCase().includes(input.value.toLowerCase())) {
            return product;
        }
    })
    displayProducts(filteredproducts);
}

const displayProducts = (filteredproducts) => {
    const productString = filteredproducts.map((product) => {

        return `
        <li class="product">
            <p> ${product.name}</p>
            <p>  price: ${product.price}</p>
        </li>
    `;
    }).join('');
    document.getElementById('productList').innerHTML = productString;
}

input.addEventListener('input', search);


//-----filters products through max price

function searchByPrice() {
    const filteredproducts = products.filter((product) => {
        if (priceInput.value <= product.price) {
            return product;
        }
    })
    displayProductsByPrice(filteredproducts);
}

const displayProductsByPrice = (filteredproducts) => {
    const productsByPrice = filteredproducts.map((product) => {

        return `
        <li class="product">
            <p> ${product.name}</p>
            <p>  price: ${product.price}</p>
        </li>
    `;
    }).join('');
    ulByPrice.innerHTML = productsByPrice;
}

priceInput.addEventListener('input', searchByPrice);

//-----------------------------------------------------------------------------------------------------------------------------------------------------
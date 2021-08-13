console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

//--------------------------------------------------------------
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

        productList.appendChild(title);
        title.appendChild(price);
        title.appendChild(rating);
    }
}

renderProducts(products); // This should create the ul and the li's with the individual products details
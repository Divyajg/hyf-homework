class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    convertToCurrency(currency) {
        fetch(
                "https://v6.exchangerate-api.com/v6/2d116b855d76dabb3c7dcbe8/latest/DKK"
            )
            .then((response) => response.json())
            .then((data) => {
                const currencies = data.conversion_rates;
                const convertCurrency = this.price * currencies[currency];
                console.log(convertCurrency + currency);
            })
    }

}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(product) {
        const updatedProdList = this.products.filter((item) => product.name !== item.name);
        this.products = updatedProdList;
    }

    searchProduct(productName) {
        const searchedProducts = this.products.filter((product) =>
            product.name.toLowerCase().includes(productName.toLowerCase())
        );
        return searchedProducts;
    }

    getTotal() {
        return this.products.reduce((totalPrice, product) => totalPrice + product.price, 0);
    }

    renderProducts() {
        const getProducts = document.querySelector("#getProducts");
        const h1 = document.createElement("h1");
        getProducts.appendChild(h1);
        h1.innerHTML = "Products:";
        this.products.forEach((product) => {

            const item = document.createElement("p");
            getProducts.appendChild(item);
            item.innerHTML = `Product: ${product.name}`;
            const price = document.createElement("span");
            getProducts.appendChild(price);
            price.innerHTML = `Price: ${product.price}`;

            const total = document.getElementById("total");
            total.innerHTML = `Total Price: ${this.getTotal()}`;

        });
    }

    getUser() {
        return (fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((result) => result.json())
            .then((data) => {
                const user = document.getElementById("user");
                const h3 = document.createElement("h3");
                user.appendChild(h3);
                h3.innerHTML = `Username: ${data.username}`;
                const p = document.createElement("p");
                user.appendChild(p);
                p.innerHTML = `Email: ${data.email}`;
            })
        );
    }
}


const shoppingCart = new ShoppingCart();

const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);
flatscreen.convertToCurrency("EUR");

const jabra = new Product("jabra", 700);
shoppingCart.addProduct(jabra);
jabra.convertToCurrency("EUR");

const ipod = new Product("ipod", 1300);
shoppingCart.addProduct(ipod);
ipod.convertToCurrency("EUR");

const vivoMini = new Product("vivoMini", 2100);
shoppingCart.addProduct(vivoMini);
vivoMini.convertToCurrency("EUR");

const garminBørn = new Product("garminBørn", 400);
shoppingCart.addProduct(garminBørn);
garminBørn.convertToCurrency("EUR");

shoppingCart.removeProduct(ipod);

const userinfo = document.getElementById("userButton");
userinfo.addEventListener("click", () => {
    shoppingCart.getUser();
    userinfo.disabled = true;
});

const getCartItems = document.getElementById("shoppingCart");
getCartItems.addEventListener("click", () => {
    shoppingCart.renderProducts();
    getCartItems.disabled = true;
});

const plant = new Product("plant", 50);
plant.convertToCurrency("EUR");
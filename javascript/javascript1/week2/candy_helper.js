// Candy Helper----------------------------------------------------------------------------------------------------------------------------
const boughtCandyPrice = [];
let price = 0;
let boughtCandy = 0;

function addCandy(candyType, weight) {
    switch (candyType) {
        case 'sweet':
            price += 0.5 * weight;
            break;
        case 'chocolate':
            price += 0.7 * weight;
            break;
        case 'toffee':
            price += 1.1 * weight;
            break;
        case 'chewing_gum':
            price += 0.03 * weight;
            break;
        default:
            price = 0;
            console.log(candyType + ' is not a valid type of candy ');
    }

    boughtCandyPrice.push(price);
    return boughtCandyPrice[i];
}

addCandy('sweet', 2);
addCandy('chocolate', 5);
addCandy('salt', 10)
addCandy('toffee', 10);
addCandy('chewing_gum', 8);
console.log(boughtCandyPrice);


for (let i = 0; i < boughtCandyPrice.length; i++) {
    boughtCandy += boughtCandyPrice[i];
}

let amountToSpend = Math.random() * 100;

function canBuyMoreCandy(check) {
    if (amountToSpend > boughtCandy) {
        console.log(boughtCandy + "  You can buy more, so please do!.");
    } else {
        console.log(boughtCandy + "  Enough Candy for you!")
    }

}

canBuyMoreCandy(true);
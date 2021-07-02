/* Age - ify*/
let yearOfBirth;
let yearFuture;
yearOfBirth = 1991;
yearFuture = 2067;

let age = (yearFuture - yearOfBirth);
console.log(`Your will be ${age} years old in ${yearFuture}`);

/*Goodboy - Oldboy */

let dogYearOfBirth;
let dogYearFuture;
let dogYear;
let shouldShowResultInDogYears;

dogYearOfBirth = 2016;
dogYearFuture = 2049;

dogYear = (dogYearFuture - dogYearOfBirth);

/* shouldShowResultInDogYears should be true or false */
shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears == true) {
    console.log(`Your dog will be ${(1/7)*dogYear} years old in ${dogYearFuture} `);
} else {
    console.log(`Your dog will be ${dogYear} years old in ${dogYearFuture} `);
};

/*Housey pricey */

let buyer = ["Peter", "Julia"];
let houseWidth = [8, 5];
let houseHeight = [8, 10];
let houseDepth = [10, 11];
let gardenSizeInM2 = [100, 70];
let houseCost = [2500000, 1000000];
let i = 0;

let volumeInCubicMeters = [];
let housePrice = [];

for (i = 0; i <= (buyer.length - 1); i++) {
    volumeInCubicMeters[i] = houseWidth[i] * houseHeight[i] * houseDepth[i];
    housePrice[i] = volumeInCubicMeters[i] * 2.5 * 1000 + gardenSizeInM2[i] * 300;
    console.log(`Price of house bought by ${buyer[i]} is ${housePrice[i]}`);

    if (houseCost[i] > housePrice[i]) {
        console.log(` ${buyer[i]} is paying more than the Usual price.`);
    } else {
        console.log(`${buyer[i]} is paying less than the Usual price`);

    }
}



/*Ez Namey */

let firstWords = ["Crazy", "Bang", "Gang", "Code", "Easy", "Decode", "Bahu", "project", "Mix", "Project"];
let secondWords = ["Bang", "Band", "Leader", "Coder", "Saho", "Master", "Hitler", "Java", "Developer", "finish"];

var startupName;

const randomNumber = Math.floor(Math.random() * 10);

startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log(`The Startup name recomendation is: "${startupName}" contains ${startupName.length}characters `);
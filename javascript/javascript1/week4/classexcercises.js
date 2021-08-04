// Factorial--------------------------------------------------------------------
function factorial(num) {
    let result = 1;
    for (let i = num; i >= 1; i--) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));


function fact(num) {
    if (num === 0) {
        return 0;
    }

    if (num === 1) {
        return 1;
    }

    {
        return num * fact(num - 1);
    }
}

console.log(fact(4));


//Fibonacci----------------------------------------------------------------------

let fibArray = [0, 1, ];
for (let i = 2; i <= 15; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    fibArray[i].push;
};
console.log(fibArray);

function fib(num) {
    return fibArray[num - 1];
}
console.log(fib(10));


function fibNum(numIndex) {
    if (numIndex === 0) {
        return 0;
    }

    if (numIndex === 1) {
        return 1;
    }

    {
        let result = fibNum(numIndex - 1) + fibNum(numIndex - 2);
        return result;
    }
}
console.log(fibNum(5));

//FizzBuzz---------------------------------------------------------------------


function fizzBuzzArr(fizzNum, buzzNum) {

    let result = [];

    for (let i = 1; i <= 100; i++) {
        if (i % fizzNum === 0 && i % buzzNum === 0) {
            result.push("fizzBuzz");
        }

        if (i % fizzNum === 0) {
            result.push("fizz");
        }

        if (i % buzzNum === 0) {
            result.push("buzz");
        }

        {
            result.push(i)
        }
    }

    return result
}

console.log(fizzBuzzArr(3, 5));


// Build a sentiment analyzer-----------------------------------------------------------------------

function getSentimentScore(string) {
    let positiveArray = [];
    let negativeArray = [];
    let score = 0;

    if (string.includes('super')) {
        positiveArray.push(' super ');
        score += 1;
    }

    if (string.includes('awesome')) {
        positiveArray.push(' awesome ');
        score += 1;
    }

    if (string.includes('happ')) {
        positiveArray.push(' happy ');
        score += 1;
    }

    if (string.includes('mega')) {
        positiveArray.push(' mega ');
        score += 1;
    }

    if (string.includes('lik')) {
        positiveArray.push(' like ');
        score += 1;
    }

    if (string.includes('great')) {
        positiveArray.push(' great ');
        score += 1;
    }

    if (string.includes('bad')) {
        negativeArray.push(' bad ');
        score -= 1;
    }

    if (string.includes('sad')) {
        negativeArray.push(' sad ');
        score -= 1;
    }

    if (string.includes('worr')) {
        negativeArray.push(' worry ');
        score -= 1;
    }

    if (string.includes(' lost ')) {
        negativeArray.push(' lost ');
        score -= 1;
    }

    if (string.includes('hate')) {
        negativeArray.push(' hate ');
        score -= 1;
    }

    if (string.includes('bor')) {
        negativeArray.push(' boring ');
        score -= 1;
    }

    if (string.includes('dont')) {
        negativeArray.push(' dont ');
        score -= 1;
    }


    console.log('Sentence: "' + string + '" has ');
    console.log('score = ' + score);
    console.log('Positive words: ' + positiveArray);
    console.log('Negative words: ' + negativeArray);

}

getSentimentScore('I am mega super awesome happy');
getSentimentScore("I hate doing boring stuff");



//Credit card cardNumber formatter--------------------------------------------------------------------------------

function formatCreditCardNumber(cardNum) {

    let result = "";
    let gap_size = 4; //required gap between spaces

    while (cardNum.length > 0) {
        result = result + " " + cardNum.substring(0, gap_size); // Insert space character
        cardNum = cardNum.substring(gap_size);
    }

    return result;

}

console.log(formatCreditCardNumber('123456789'));

//Character frequencies-----------------------------------------------------------------------

function getCharacterFrequencies(string) {
    let freq = {};
    for (let i = 0; i < string.length; i++) {
        let character = string.charAt(i);
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }

    return freq;
}

console.log(getCharacterFrequencies('newyear'));

//Palindromic substring-----------------------------------------------------------

function isPalindrome(str) {
    let revStr = str.split("").reverse().join("");
    return str === revStr;
}
console.log(isPalindrome("abracadabra"));


function longestPalSubstr(str) {

    let max_length = 0;
    let resultPalindrome = '';

    for (let i = 0; i < str.length; i++) {
        let subs = str.substr(i, str.length);

        for (let j = subs.length; j >= 0; j--) {
            let sub_subs_str = subs.substr(0, j);
            if (sub_subs_str.length <= 1)
                continue;

            if (isPalindrome(sub_subs_str)) {
                if (sub_subs_str.length > max_length) {
                    max_length = sub_subs_str.length;
                    resultPalindrome = sub_subs_str;
                }
            }
        }
    }

    console.log(resultPalindrome);
    console.log('Length of the palindrome is ' + max_length);
}



longestPalSubstr("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE");

longestPalSubstr("forgeekeegfor");


//Credit card info------------------------------------------------------


function getCardInfo(cardNumber) {
    // visa
    let re = new RegExp("^4");
    if (cardNumber.match(re) != null)
        return "Visa";

    // Mastercard 
    if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(cardNumber))
        return "Mastercard";

    // AMEX
    re = new RegExp("^3[47]");
    if (cardNumber.match(re) != null)
        return "AMEX";

    // Discover
    re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
    if (cardNumber.match(re) != null)
        return "Discover";

    // Diners
    re = new RegExp("^36");
    if (cardNumber.match(re) != null)
        return "Diners";

    return "Not a valid type of card number!!";
}


console.log(getCardInfo('6011321334789876'));
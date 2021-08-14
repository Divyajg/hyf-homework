//Find the shortest word--------------------------------------------------------

const div1 = document.createElement('div');
let ol = document.createElement('ol');
const body = document.querySelector('body');
let pBeforeList = document.createElement('p');
pBeforeList.innerText = 'Danish words:';
div1.append(pBeforeList);

div1.style.backgroundColor = 'grey';
document.body.append(div1);
div1.append(ol);

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

for (let i = 0; i < danishWords.length; i++) {
    let li = document.createElement('li');
    li.innerText = danishWords[i];
    ol.append(li);
}

let pAfterList = document.createElement('p');
pAfterList.innerText = 'Click here to see the shortest word of above list!';
div1.append(pAfterList);

let button1 = document.createElement('button');
div1.append(button1);
button1.innerText = 'Shortest word!';
button1.setAttribute('onclick', 'shortestWord(danishWords)');

let pResult = document.createElement('p');
div1.append(pResult);
pResult.setAttribute('id', 'log');

function shortestWord(danishWords) {
    let log = document.getElementById('log');
    let x;
    for (let i = 0; i < danishWords.length - 1; i++) {
        if (danishWords[i].length < danishWords[i + 1].length) {
            x = i;
        } else {
            x = i + 1;
        }
    }
    return log.innerText = danishWords[x];

}



//Find and count the Danish letters-------------------------------------------------

const danishString = "Jeg har en blå bil";
console.log(danishString);
console.log(countDanishSpecialLetters(danishString)); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
console.log(danishString2);
console.log(countDanishSpecialLetters(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}

function countDanishSpecialLetters(string) {
    let total = 0;
    let å = 0;
    let æ = 0;
    let ø = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i).includes('å')) {
            total += 1;
            å += 1;
        } else if (string.charAt(i).includes('æ')) {
            total += 1;
            æ += 1;
        } else if (string.charAt(i).includes('ø')) {
            total += 1;
            ø += 1;
        }
    }
    return '{Total = ' + total + ': å:' + å + '  æ:' + æ + '  ø:' + ø + ' }';
}

//Spirit animal name generator----------------------------------------------------

const div2 = document.createElement('div');
body.append(div2);
div2.style.backgroundColor = '#90f0f0';

const inputName = document.createElement('input');
div2.append(inputName);
inputName.setAttribute('type', 'text');
inputName.setAttribute('placeholder', 'Name');

const button2 = document.createElement('button');
div2.append(button2);
button2.innerText = 'See your name and Spiritual Animal';
button2.setAttribute('onclick', 'showSpiritAnimal()');

let pName = document.createElement('p');
div2.append(pName);
pName.setAttribute('id', 'name');

let pSpiritName = document.createElement('p');
div2.append(pSpiritName);
pSpiritName.setAttribute('id', 'sa');

function showSpiritAnimal() {
    if (inputName.value) {
        let sa = document.getElementById('sa');
        const spiritAnimal = ['Rat', 'Cow', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Sheep', 'Monkey', 'Rooster', 'Dog', 'Pig'];
        let random = Math.floor(Math.random() * spiritAnimal.length);
        let randomSpiritAnimal = spiritAnimal[random];

        document.getElementById("name").innerText = inputName.value;
        sa.innerText = 'Your Spiritual Animal is " ' + randomSpiritAnimal + ' "';
    } else {
        document.getElementById("name").innerText = 'Please enter your name and click the button to see your Spiritual Animal.';
    }
}

const button3 = document.createElement('button');
div2.append(button3);
button3.innerText = 'click here - for new Spirit Animal';
button3.setAttribute('onclick', 'newSpiritAnimal()');

function newSpiritAnimal() {
    const inputNewSa = document.createElement('input');
    div2.append(inputNewSa);
    inputNewSa.setAttribute('type', 'text');
    inputNewSa.setAttribute('placeholder', 'New Spirit Animal:');
    inputNewSa.setAttribute('id', 'newSa');

    const button4 = document.createElement('button');
    div2.append(button4);
    button4.innerText = 'Get new Spirit animal.';
    button4.setAttribute('onclick', 'getYourSpiritAnimal(newSa.value)');
}


function getYourSpiritAnimal(temp) {
    let pNewSa = document.createElement('p');
    div2.append(pNewSa);
    pNewSa.setAttribute('id', 'newName');

    if (inputName.value) {
        if (temp) {
            document.getElementById("newName").innerText = 'Hey ' + inputName.value + ' Your new Spiritual Animal is " ' + temp + ' "';
        } else {
            document.getElementById("newName").innerText = 'Hey ' + inputName.value + ' Please provide your choice of animal!';
        }
    } else {
        document.getElementById("newName").innerText = 'Please enter your name first.';
    }
}
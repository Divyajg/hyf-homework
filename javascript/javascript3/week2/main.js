const redPromise = new Promise((resolve) => {
    const moveRed = () =>
        moveElement(document.querySelector("ul.marks li:nth-child(1)"), {
            x: 20,
            y: 300,
        }).then(() => {
            console.log("Element red has been moved");
        });
    setTimeout(() => {
        resolve(moveRed);
    }, 1000);
});

const greenPromise = new Promise((resolve) => {
    const moveGreen = () =>
        moveElement(document.querySelector("ul.marks li:nth-child(3)"), {
            x: 400,
            y: 20,
        }).then(() => {
            console.log("Element green has been moved");
        });
    setTimeout(() => {
        resolve(moveGreen);
    }, 2000);
});

const bluePromise = new Promise((resolve) => {
    const moveBlue = () =>
        moveElement(document.querySelector("ul.marks li:nth-child(2)"), {
            x: 400,
            y: 300,
        }).then(() => {
            console.log("Element blue has been moved");
        });
    setTimeout(() => {
        resolve(moveBlue);
    }, 3000);
});

// translate all at once:


//translate one by one:
const translateOneByOne = () => {
    redPromise.then((res) => { res() });
    greenPromise.then((res) => { res() });
    bluePromise.then((res) => { res() });
};

translateOneByOne();

//translate all at once:
const translateAllAtOnce = () => {
    Promise.all([redPromise, greenPromise, bluePromise]).then((values) => {
        values.forEach((fun) => fun());
    });
};
//translateAllAtOnce();
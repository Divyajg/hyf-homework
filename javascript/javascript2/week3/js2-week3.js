//1.delayed log-------------------------------
setTimeout(() => console.log("This text was delayed by 2.5 seconds"), 2500);

//2.delayed stringlog------------------------------
delayedStringLog = (delay, stringLog) => (delay && stringLog) ? setTimeout(() => console.log(stringLog), delay * 1000) : setTimeout(() => console.log("Called after 5 seconds"), 5000);

delayedStringLog(3, "I am logged after 3 seconds");
delayedStringLog("I", 5); // as delay is string, it is not taken and 5 is taken as string.
delayedStringLog(4, 4); // takes 4 both as number and string.

//3.click button -> delay string. 
document.getElementById('button1').addEventListener('click', delayedStringLog);

//call back function of planets:
earthLogger = () => console.log("Earth");
saturnLogger = () => console.log("Saturn");

logPlanet = (planet) => planet();

earthLogger();
saturnLogger();
logPlanet(earthLogger);
logPlanet(saturnLogger);

//5.Log location:
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

success = (pos) => {
    let crd = pos.coords;
    console.log(`This is the Latitude : ${crd.latitude}`);
    console.log(`This is the Longitude: ${crd.longitude}`);
}

error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

logLocation = () => navigator.geolocation.getCurrentPosition(success, error, [options])
document.getElementById('logLocation').addEventListener('click', logLocation);

//6.Location on a map:
let map;

initMap = () => {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

//7.Run after delay:
runAfterDelay = (delay, callback) => setTimeout(callback, delay * 1000);

runAfterDelay(5, () => console.log("Run after delay: logged after 5 seconds"));

//8.Double click on a page:
window.addEventListener('dblclick', () => console.log("double click!"));

//9.Joke creator:
logFunnyJoke = () => console.log("True: Why do cows wear bells? Because their horns don't work.");
logBadJoke = () => console.log("False: Why did the bald man paint rabbits on his head?  Because from a distance they looked like hares.");
jokeCreator = (shouldTellFunnyJoke) => (shouldTellFunnyJoke === 'true') ? logFunnyJoke() : logBadJoke();

jokeCreator('true');
jokeCreator('false');

//Functions as a variable:
//1.calling functions inside an array:
func1 = () => console.log("Function One");
func2 = () => console.log("Function Two");
func3 = () => console.log("Function Three");
const funcArray = [func1(), func2(), func3()];
for (let i = 0; i < funcArray.length; i++) { funcArray[i]; }

//2.function expression and function declaration:
const funConst = () => console.log('This is a function expression');
funcNorm = () => console.log('This is a function declaration');
funConst();
funcNorm();

//3.calling a function, which is a key value to an object:
const Obj1 = { num: 1, key1: funcInObj = () => console.log("This is a function as a key in the object.") };
funcInObj();

//The fastest presser in this realm:

const startGame = document.getElementById("startGame");
const newGame = document.getElementById("newGame");
const gameTime = document.getElementById("gameTime");
const gameStatus = document.getElementById("gameOver");
const sCount = document.getElementById("sCount");
const lCount = document.getElementById("lCount");
const winner = document.getElementById("winner");

let sPressed = 0;
let lPressed = 0;

startTheGame = () => {
    startGame.disabled = true;
    const time = gameTime.value;
    setTimeout(() => {
        document.removeEventListener("keydown", countKeyPressed);
        gameStatus.innerHTML = "Game Over";
        gameResult();
    }, time * 1000);
    document.addEventListener("keydown", countKeyPressed);
}

countKeyPressed = (e) => (e.key === "s") ? sCount.innerHTML = sPressed++ : (e.key === "l") ? lCount.innerHTML = lPressed++ : null;

newGame.addEventListener("click", () => {
    startGame.disabled = false;
    winner.innerHTML = "";
    gameStatus.innerHTML = "";
    sCount.innerHTML = "";
    lCount.innerHTML = "";
});
document.getElementById('startGame').addEventListener("click", startTheGame);


const gameResult = () => (sPressed > lPressed) ? winner.innerHTML = "S is the winner" : (sPressed < lPressed) ? winner.innerHTML = "L is the winner" : winner.innerHTML = "Game is draw";
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function travel() {
    let result1 = parseInt(travelInformation.destinationDistance / travelInformation.speed);
    let result2 = (travelInformation.destinationDistance % travelInformation.speed);
    return result1 + " hours and " + result2 + " minutes";
}

const travelTime = travel(travelInformation);
console.log(travelTime);
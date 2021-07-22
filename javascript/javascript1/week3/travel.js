const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function calculateTravelTime(travelInformation) {
    let result1 = parseInt(travelInformation.destinationDistance / travelInformation.speed);
    let result2 = (travelInformation.destinationDistance % travelInformation.speed);
    return result1 + " hours and " + result2 + " minutes";
}

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime);
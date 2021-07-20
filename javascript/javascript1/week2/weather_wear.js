// Weather wear ---------------------------------------------------------------------------------------------------------------------------


function clothesSuggested(temp) {
    if (temp > 15) {
        return 'Its hot!, wear shorts and T-shirt';
    } else if (temp >= 9) {
        return 'Its beautiful!, wear cozy clothes';
    } else if (temp >= 2) {
        return 'Its breezing!, wear warm clothes';
    } else if (temp >= 0) {
        return 'Its cold!, wear Hoodies';
    } else {
        return 'Its freezing!, wear Winter jackets';
    }
}

let clothesToWear = clothesSuggested(-1);
console.log(clothesToWear);
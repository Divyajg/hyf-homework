// Flight booking fullname function ---------------------------------------------------------------------------------------------------------
function fullName(Firstname, surname) {
    console.log(Firstname + " " + surname);
}
fullName('Benjamin', 'Hughes');


//Formal fullname with gender ---------------------------------------------------------------------------------------------------------------
function getFullname(firstname, lastname, useFormalName, gender) {
    if (useFormalName === true) {
        if (gender === 'male') {
            console.log("Lord" + " " + firstname + " " + lastname);
        } else if (gender === 'female') {
            console.log("Lady" + " " + firstname + " " + lastname);
        } else {
            console.log(firstname + " " + lastname + "    " + "Gender not specified");
        }

    } else {
        console.log(firstname + " " + lastname);
    }
}
let fullname1 = getFullname('Anna', 'Hughes', true);
let fullname2 = getFullname('Benjamin', 'Hughes', true, 'male');
let fullname3 = getFullname('Cieli', 'Hughes', true, 'female');
let fullname4 = getFullname('Duke', 'Hughes');
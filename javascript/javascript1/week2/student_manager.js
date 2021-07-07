// student Manager -----------------------------------------------------------------------------------------------------------------------------


const class07Students = [];
const length = 6;
let i = 0;

function addStudentToClass(studentName) {

    if (class07Students.length < length) {
        if (class07Students.includes(studentName)) {
            console.log('Student ' + studentName + ' is already in the class.');

        } else if (studentName == " ") {
            console.log('Student name cannot be empty! ');

        } else {
            class07Students.push(studentName);
            return class07Students[i];

        }

    } else if (studentName === 'queen') {
        class07Students.push(studentName);
        return class07Students[i];

    } else {
        console.log(studentName + '  Cannot be added to the class 07, as the class 07 is full')
    }


}


function getNumberOfStudents() {
    // You write code here
    let totalNumberOfStudents = class07Students.length;
    return totalNumberOfStudents;
}



addStudentToClass('Ram');
addStudentToClass('Bon');
addStudentToClass('Chi');
addStudentToClass('Chi');
addStudentToClass(' ');
addStudentToClass('Yi');
addStudentToClass('kim');
addStudentToClass('queen');
addStudentToClass('pam');
console.log(class07Students);

console.log("Total number of students in the class are  " + getNumberOfStudents());
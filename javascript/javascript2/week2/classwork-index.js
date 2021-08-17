const items = [
    { name: "Bike", price: 100 },
    { name: "Tv", price: 200 },
    { name: "Album", price: 10 },
    { name: "Book", price: 5 },
    { name: "Phone", price: 500 },
    { name: "Computer", price: 1000 },
    { name: "Keyboard", price: 25 },
];

const newItemList = items.map((item) => {
    return item.name + ' price is ' + item.price;
});

console.log(newItemList);

const filteredItems = items.filter((item) => {
    if (item.price <= 200) {
        return item.name + ' price is ' + item.price
    }
})
console.log(filteredItems);

const newItems = items.filter(item => {
    if (item.price <= 200) {
        return 'Product is ' + item.name
    }
})
console.log(newItems);

const div1 = document.createElement('div');
const body = document.querySelector('body');
document.body.append(div1);

const mentors = [
    { "name": "Abed Sujan", "subjects": ['JS', 'HTML', 'CSS', 'NODEJS'], yearOfExperience: 4 },
    { "name": "Ahmed Magdy", "subjects": ['JS', 'Database', 'CSS'], yearOfExperience: 1 },
    { "name": "Alicia Gonzales", "subjects": ['DB', 'HTML', 'NODEJS'], yearOfExperience: 8 },
    { "name": "allan Thraen", "subjects": ['REACT', 'HTML', 'CSS'], yearOfExperience: 3 },
    { "name": "Anders Ravn", "subjects": ['JS', 'HTML', 'NODEJS'], yearOfExperience: 2 },
    { "name": "Daniel Fernandes", "subjects": ['Database', 'HTML', 'CSS'], yearOfExperience: 9 }
];

const newMentor = mentors.forEach(mentor => {

    if (mentor.yearOfExperience >= 2) {
        const h2 = document.createElement('h2');
        h2.innerText = mentor.name;
        div1.appendChild(h2);

    }
});
console.log(newMentor);
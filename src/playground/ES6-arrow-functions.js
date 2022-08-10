// ES6 Arrow Function - Always Anonymous ! (Assign to a variable)
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};
console.log(getFirstName('Michael Thomas'));

// ES6 Arrow Function - Only with single expression (no return needed & single line)
// Arguments are not bound and this keyword is not bound
const getLastName = (fullName) => fullName.split(' ')[1];
console.log(getLastName('Michael Thomas'));

const add = (a, b) => {
    // console.log(arguments); error
    return a + b;
};
console.log(add(10, 2));

const users = {
    name: 'Michael Thomas',
    cities: ['London', 'Dublin', 'Peterborough'],
    printPlacesLived() {

        // Returns a new array (Doesnt change the original array / object) / creates new one
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(users.printPlacesLived());

const multiplier = {
    numbers: [10, 20, 50],
    multipyBy: 2,
    multipy() {
        return this.numbers.map((number) => number * this.multipyBy);
    }
};
console.log(multiplier.multipy());
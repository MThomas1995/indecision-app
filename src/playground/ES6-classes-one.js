console.log('ES6 Classes One');

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age  = age;
    }
    // Access to this
    getGreeting() {
        return `Hello, my name is ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

// Class that extends another class
class Student extends Person {
    constructor(name, age, major) {
        // Accesses parent class
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        // Checks if the property has been set
        return !!this.major;
    }
    // Modifies parent class method and checks for value to return a different content
    getDescription() {
        let description = super.getDescription();

        if(this.major) {
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
} 

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me    = new Traveler('Michael Thomas', 27, 'London');
const other = new Traveler();

console.log(me.getGreeting());
console.log(other.getGreeting());
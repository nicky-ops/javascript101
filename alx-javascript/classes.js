// Classes are a template for creating objects.
// They encapsulate data with code to work on that data.

// Class Declaration
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// Class Expression : class is anonymous but assigned to a variable
const Rectangle1 = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

// Class expression with its name 
const Rectangle2 = class Rectangle3 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
    *getSides() {
        yield this.height;
        yield this.width;
        yield this.height;
        yield this.width;
    }
}

// Field declarations
class Rectangle {
    height = 0;
    width;
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// private properties
class Rectangle {
    #height = 0;
    #width;
    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }
}

// Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); // call the super class constructor and pass in the name parameter
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}
const d = new Dog("Mitzie");
d.speak(); // Mitzie barks.
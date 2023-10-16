"use strict";
// Primitive Types
let num = 5;
let str = 'Traversy Media';
let bool = true;
let any = 'hello';
// Reference Types
let numArray = [1, 2, 3, 4, 5];
let object = {
    name: 'Brad',
    age: 30,
};
// Tuple (fixed array)
let person = ['Brad', 36, true];
// Tuple Array (array of tuples)
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
// Union (can be more than one type)
let id = 22;
let mixedArray = [
    str,
    num,
    bool,
    object,
];
// Enum (named contants)
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 4] = "Left";
    Directions["Right"] = "5";
})(Directions || (Directions = {}));
console.log(Directions.Up); // 0
console.log(Directions.Down); // 1
console.log(Directions.Left); // 4
console.log(Directions.Right); // "5"
// Objects
const user = {
    id: 1,
    name: 'John',
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// Functions
function sum(a, b) {
    return a + b;
}
// Does not return a value => VOID
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const div = (x, y) => x / y;
const mul = (x, y) => x * y;
// Classes
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const matthijs = new Person(1, 'Matthijs Boet', 42);
console.log(matthijs.register());
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
// Extending classes with subclasses
class Employee extends Person {
    constructor(id, name, age, position, salary) {
        super(id, name, age);
        this.position = position;
        this.salary = salary;
    }
}
const juniorWebDeveloper = new Employee(2, 'John Doe', 25, 'Junior Developer', 67200);
// Generics (placeholder for the type(s) of a property or a function)
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([1, 2, 3, 4, 5]);
let stringArray = getArray(['brad', 'John', 'Jill']);
// numberArray.push('6') => Type 'string' is not assignable to type 'number'

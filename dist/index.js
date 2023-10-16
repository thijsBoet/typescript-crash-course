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

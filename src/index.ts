// Primitive Types
let num: number = 5;
let str: string = 'Traversy Media';
let bool: boolean = true;
let any: any = 'hello';

// Reference Types
let numArray: number[] = [1, 2, 3, 4, 5];
let object: object = {
	name: 'Brad',
	age: 30,
};

// Tuple (fixed array)
let person: [string, number, boolean] = ['Brad', 36, true];
// Tuple Array (array of tuples)
let employee: [number, string][];

employee = [
	[1, 'Brad'],
	[2, 'John'],
	[3, 'Jill'],
];

// Union (can be more than one type)
let id: string | number = 22;

let mixedArray: (string | number | boolean | object)[] = [
	str,
	num,
	bool,
	object,
];

// Enum (named contants)
enum Directions {
	Up,
	Down,
	Left = 4,
	Right = '5',
}
console.log(Directions.Up); // 0
console.log(Directions.Down); // 1

console.log(Directions.Left); // 4
console.log(Directions.Right); // "5"

// Type (can be used with primitives, unions, tuples, etc.)
type User = {
	id: number;
	name: string;
};

// Objects
const user: User = {
	id: 1,
	name: 'John',
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// Functions
function sum(a: number, b: number): number {
	return a + b;
}

// Does not return a value => VOID
function log(message: string | number): void {
	console.log(message);
}

// Interfaces (can be used with only objects, functions and classes)
interface UserInterface {
	// Value cannot be changed
	readonly id: number;
	name: string;
	age?: number;
}

const user1: UserInterface = {
	id: 1,
	name: 'John',
};

// Interface with functions
interface MathFunc {
	(x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
// Primitives: number, string, boolean;
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 22;

let userName: string = "Dimitris";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: 'Max',
    age: 22
};

let people: Person [];

// Type inferece

let course: string | number = 'React the complete guide';

course = 12341;

function add(a: number, b: number) {
    return a + b;
}

function printOutput(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
const stringArray = insertAtBeginning(['a','b','c'],'d');

// updatedArray[0].split('');

stringArray[0].split('');
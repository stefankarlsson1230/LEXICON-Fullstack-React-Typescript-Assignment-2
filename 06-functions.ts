// TODO: Create a function type for a calculator operation
type CalculatorOperation = (x: number, y: number) => number;


// TODO: Implement basic calculator operations
const add: CalculatorOperation = (x, y) => x + y;
const subtract: CalculatorOperation = (x, y) => x - y;
const multiply: CalculatorOperation = (x, y) => x * y;
const divide: CalculatorOperation = (x, y) => x / y;


// TODO: Create a function with optional parameters for creating a user profile
// Parameters: firstName, lastName, age (optional), city (optional)
// Return an object with all the information
// Use default values for optional parameters if needed
type User = {
    firstName: string;
    lastName: string;
    age: number;
    city: string;
};

function createProfile(firstName: string, lastName: string, age: number = 18, city: string = 'Linköping'): User {
    return {
        firstName,
        lastName,
        age,
        city
    };
}


// TODO: Create a function with rest parameters that calculates average
function calculateAverage(...numbers: number[]): number {
    if (numbers.length === 0) return 0;
    return (numbers.reduce((prev, cur) => prev + cur, 0)) / numbers.length;
}


// TODO: Create a function that takes a callback
// Apply callback to each number
function processNumbers(numbers: number[], callback: (num: number) => number): number[] {
    return numbers.map(callback);
}


// Test your code
console.log(add(5, 3));
console.log(createProfile("John", "Doe"));
console.log(createProfile("Jane", "Smith", 28, "New York"));
console.log(calculateAverage(10, 20, 30, 40));
console.log(processNumbers([1, 2, 3, 4], (n) => n * 2));

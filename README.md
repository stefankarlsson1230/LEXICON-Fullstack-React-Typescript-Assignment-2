# LEXICON - Fullstack React
## Typescript
### Assignment 2


Before starting, create a new project/folder and initialize it with: `npm init -y`.

You will also need to install the following packages (using `npm install`):
- typescript
- @types/node
- tsx

**Tips for success**
1. Read Error Messages: TypeScript error message are helpful! Read them carefully
2. Use Type Inference: You don’t always need to wrote types explicitly
3. Start Simple: Get the basic functionality working, then add types.
4. Test Your Code: Run your code frequently with `tsx`.
5. Ask Questions: Don’t hesitate to ask for help!

**Running**  
To run your project you can either:
Run `npx tsx <filename.ts>` in your terminal or define a script section in your `package.json` file
```
{
    "scripts": {
    "start": "tsx <filename.ts>"
    }
}
```
and then run `npm run start`

#### Exercise 1: Basic Types
**Objective:** Learn to work with basic TypeScript types.

Create a file ´01-basic-types.ts´ and complete the following:
```
// TODO: Add type annotations to these variables
let userName = "Alice";
let age = 25;
let isStudent = true;
let hobbies = ["reading", "gaming", "coding"];

// TODO: Create a function that takes a name (string) and age (number)
// and returns a greeting message (string)
function greet(/* add parameters with types here //) {
    // your implementation
}

// TODO: Create a function that calculates the area of a rectangle
// Parameters: width (number), height (number)
// Return: area (number)
function calculateArea(/* add parameters //) {
    // your implementation
}

// Test your functions
console.log(greet("Bob", 30));
console.log(calculateArea(5, 10));
```

#### Exercise 2: Working with Objects
**Objective:** Understand object types and interfaces.

Create a file `02-objects.ts`:
```
// TODO: Define an interface for a Book with the following properties:
// - title (string)
// - author (string)
// - year (number)
// - isAvailable (boolean)
interface Book {
    // your code here
}

// TODO: Create a function that takes a Book and returns a description string
function getBookDescription(book: Book): string {
    // your implementation
}

// TODO: Create an array of at least 3 books
const library: Book[] = [
    // your books here
];

// TODO: Create a function that finds all available books
function getAvailableBooks(books: Book[]): Book[] {
    // your implementation
}

// TODO: Create a function that finds a book by title
function findBookByTitle(books: Book[], title: string): Book | undefined {
    // your implementation
}

// Test your code
console.log(getAvailableBooks(library));
```

#### Exercise 3: Union Types and Type Guards
**Objective:** Learn to work with union types and type checking.

Create a file `03-union-types.ts`:
```
// TODO: Create a type alias for ID that can be either string or number
type ID = // your code here

// TODO: Create a function that formats an ID
// If it's a number, prefix it with "ID-"
// If it's a string, return it in uppercase
function formatID(id: ID): string {
    // your implementation with type checking
}

// TODO: Create a type for different user roles
type UserRole = // admin, user and guest
// TODO: Create an interface for User with:
// - id (ID type)
// - name (string)
// - role (UserRole)
// - email (string, optional)
interface User {
    // your code here
}

// TODO: Create a function that checks if a user has admin privileges
function isAdmin(user: User): boolean {
    // your implementation
}

// TODO: Create a function that returns appropriate greeting based on role
function getRoleGreeting(user: User): string {
    // your implementation using switch or if-else
}

// Test your code
const user1: User = { id: 1, name: "Alice", role: "admin" };
const user2: User = { id: "USER-123", name: "Bob", role: "user", email: "bob@example.com" };
console.log(formatID(user1.id));
console.log(isAdmin(user1));
console.log(getRoleGreeting(user2));
```

#### Exercise 4: Arrays and Tuples
**Objective:** Master array types and tuples.

Create a file `04-arrays-tuples.ts`:
```
// TODO: Create a function that returns the sum of all numbers in an array
function sum(numbers: number[]): number {
    // your implementation
}

// TODO: Create a function that filters out all numbers less than a threshold
function filterNumbers(numbers: number[], threshold: number): number[] {
    // your implementation
}

// TODO: Define a tuple type for a coordinate (x, y)
type Coordinate = // your tuple type here

// TODO: Create a function that calculates distance between two coordinates
function calculateDistance(point1: Coordinate, point2: Coordinate): number {
    // your implementation
    // Formula: sqrt((x2-x1)² + (y2-y1)²)
}

// TODO: Define a tuple type for RGB color (red, green, blue)
type RGB = // your tuple type here

// TODO: Create a function that converts RGB to hex color string
function rgbToHex(color: RGB): string {
    // your implementation
    // Example: [255, 0, 0] should return "#FF0000"
}

// Test your code
console.log(sum([1, 2, 3, 4, 5]));
console.log(calculateDistance([0, 0], [3, 4]));
console.log(rgbToHex([255, 128, 0]));
```

#### Exercise 5: Enums
**Objective:** Learn to use enums for better code organization.

Create a file ´05-enums.ts´ and complete the following:
```
// TODO: Create an enum for days of the week
enum DayOfWeek {
    // your code here
}

// TODO: Create an enum for order status
enum OrderStatus { Pending, Processing, Shipped, Delivered, Cancelled }

// TODO: Create an interface for Order
interface Order { id: number; customerName: string; status: OrderStatus;
orderDate: Date; }

// TODO: Create a function that returns a human-readable status message
function getStatusMessage(status: OrderStatus): string {
    // your implementation
}

// TODO: Create a function that checks if an order can be cancelled
// (only Pending and Processing orders can be cancelled)
function canCancelOrder(order: Order): boolean {
    // your implementation
}

// TODO: Create a function that gets the next status
function getNextStatus(currentStatus: OrderStatus): OrderStatus | null {
    // your implementation
// Return null if it's already Delivered or Cancelled
}

// Test your code
const order: Order = {
id: 1,
customerName: "Charlie",
status: OrderStatus.Pending,
orderDate: new Date()
};

console.log(getStatusMessage(order.status));
console.log(canCancelOrder(order));
```

#### Exercise 6: Functions and Optional Parameters
**Objective:** Master function types and optional parameters.

Create a file ´06-functions.ts´ and complete the following:
```
// TODO: Create a function type for a calculator operation
type CalculatorOperation = // function type here

// TODO: Implement basic calculator operations
const add: CalculatorOperation = // your implementation
const subtract: CalculatorOperation = // your implementation
const multiply: CalculatorOperation = // your implementation
const divide: CalculatorOperation = // your implementation

// TODO: Create a function with optional parameters for creating a user profile
// Parameters: firstName, lastName, age (optional), city (optional)
function createProfile(/* your parameters //) {
    // Return an object with all the information
    // Use default values for optional parameters if needed
}

// TODO: Create a function with rest parameters that calculates average
function calculateAverage(//.numbers: number[]): number {
    // your implementation
}

// TODO: Create a function that takes a callback
function processNumbers(numbers: number[], callback: (num: number) /> number): number[] {
    // your implementation - apply callback to each number
}

// Test your code
console.log(add(5, 3));
console.log(createProfile("John", "Doe"));
console.log(createProfile("Jane", "Smith", 28, "New York"));
console.log(calculateAverage(10, 20, 30, 40));
console.log(processNumbers([1, 2, 3, 4], (n) /> n * 2));
```

#### Exercise 7: Generics Basics
**Objective:** Master function types and optional parameters.

Create a file ´07-generics.ts´ and complete the following:
```
// TODO: Create a generic function that returns the first element of an array
function getFirstElement<T>(/* your parameters */): T | undefined {
    // your implementation
}

// TODO: Create a generic function that returns the last element
function getLastElement<T>(/* your parameters */): T | undefined {
    // your implementation
}

// TODO: Create a generic interface for a key-value pair
interface KeyValuePair<K, V> {
    // your code here
}
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));
```

#### Exercise 8: Utility Types and Type Manipulation
**Objective:** Learn built-in utility types.

Create a file ´08-utility-types.ts´ and complete the following:
```
// Base interface for exercises
interface Todo { id: number; title: string; description: string; completed: boolean; createdAt: Date;}

// TODO: Use Partial to create a type for updating a todo
type TodoUpdate = // your code here

// TODO: Create a function that updates a todo
function updateTodo(todo: Todo, updates: TodoUpdate): Todo {
    // your implementation
}

// TODO: Use Pick to create a type with only id and title
type TodoPreview = // your code here

// TODO: Create a function that returns a todo preview
function getTodoPreview(todo: Todo): TodoPreview {
    // your implementation
}

// TODO: Use Omit to create a type without the id
type NewTodo = // your code here

// TODO: Create a function that creates a new todo
function createTodo(todoData: NewTodo): Todo {
    // your implementation - generate a new ID
}

// TODO: Use Readonly to create an immutable todo type
type ReadonlyTodo = // your code here

// TODO: Use Record to create a type for todo statistics
type TodoStats = Record<'total' | 'completed' | 'pending', number>;

// TODO: Create a function that calculates todo statistics
function calculateStats(todos: Todo[]): TodoStats {
    // your implementation
}

// TODO: Use Required to make all properties required
interface OptionalConfig { apiUrl/: string; timeout/: number; retries/: number; }
type RequiredConfig = // your code here

// Test your code
const todo: Todo = {
id: 1, title: "Learn TypeScript",
description: "Complete all exercises",
completed: false, createdAt: new Date()
};
const updated = updateTodo(todo, { completed: true });
console.log(updated);
const preview = getTodoPreview(todo);
console.log(preview);
```
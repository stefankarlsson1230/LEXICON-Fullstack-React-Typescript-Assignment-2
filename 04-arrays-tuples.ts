// TODO: Create a function that returns the sum of all numbers in an array
function sum(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}


// TODO: Create a function that filters out all numbers less than a threshold
function filterNumbers(numbers: number[], threshold: number): number[] {
    return numbers.filter((num) => num >= threshold);
}


// TODO: Define a tuple type for a coordinate (x, y)
type Coordinate = [x: number, y: number];


// TODO: Create a function that calculates distance between two coordinates
function calculateDistance(point1: Coordinate, point2: Coordinate): number {
    // Formula: sqrt((x2-x1)² + (y2-y1)²)
    return Math.sqrt((point2[0] - point1[0])**2 + (point2[1] - point1[1])**2);
}


// TODO: Define a tuple type for RGB color (red, green, blue)
type RGB = [red: number, green: number, blue: number];


// TODO: Create a function that converts RGB to hex color string
function rgbToHex(color: RGB): string {
     return ('#' + 
        color[0].toString(16).padStart(2, '0') + 
        color[1].toString(16).padStart(2, '0') + 
        color[2].toString(16).padStart(2, '0')
    ).toUpperCase();
}


// Test your code
console.log(sum([1, 2, 3, 4, 5]));
console.log(filterNumbers([1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(calculateDistance([0, 0], [3, 4]));
console.log(rgbToHex([255,0,0]));
console.log(rgbToHex([255, 128, 0]));

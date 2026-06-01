// TODO: Create a function that returns the sum of all numbers in an array
function sum(numbers: number[]): number {
    let sum: number = 0;

    for(let n of numbers) {
        sum += n;
    }

    return sum;
}


// TODO: Create a function that filters out all numbers less than a threshold
function filterNumbers(numbers: number[], threshold: number): number[] {
    const result: number[] = [];

    for(let n of numbers) {
        if(n >= threshold) result.push(n);
    }

    // This implementation returns a new array, it does not modify the original array
    return result;
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
    let red: string;
    let green: string;
    let blue: string;

    if (color[0] === 0) red = '00'; 
    else if (color[0] < 16) red = '0' + color[0].toString(16);
    else red = color[0].toString(16);

    if (color[1] === 0) green = '00'; 
    else if (color[1] < 16) green = '0' + color[1].toString(16);
    else green = color[1].toString(16);

    if (color[2] === 0) blue = '00'; 
    else if (color[2] < 16) blue = '0' + color[2].toString(16);
    else blue = color[2].toString(16);

    return ('#' + red + green + blue).toUpperCase();
}


// Test your code
console.log(filterNumbers([1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(sum([1, 2, 3, 4, 5]));
console.log(calculateDistance([0, 0], [3, 4]));
console.log(rgbToHex([255,0,0]));
console.log(rgbToHex([255, 128, 0]));

// TODO: Create a generic function that returns the first element of an array
function getFirstElement<T>(values: T[]): T | undefined {
    return values.at(0);
}


// TODO: Create a generic function that returns the last element
function getLastElement<T>(values: T[]): T | undefined {
    return values.at(-1);
}


// TODO: Create a generic interface for a key-value pair
interface KeyValuePair<K, V> {
    key: K;
    value: V;
}


// Test your code
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));
console.log(getLastElement([1, 2, 3]));
console.log(getLastElement(["a", "b", "c"]));

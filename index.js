// Using let
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(`Sum using let: ${sum}`);

// Using var
var num3 = 30;
var num4 = 5;
var product = num3 * num4;
console.log(`Product using var: ${product}`);

// Using const
const PI = 3.14159;
const radius = 7;
const area = PI * radius * radius;
console.log(`Area of circle using const: ${area}`);




//map and filter and reduce flatmap



// Custom map function
function customMap(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

// Custom reduce function
function customReduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

// Custom filter function
function customFilter(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

// Custom flatMap function
function customFlatMap(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        const mapped = callback(array[i], i, array);
        result = result.concat(mapped);
    }
    return result;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
console.log("Custom Map:", customMap(numbers, x => x * 2));
console.log("Custom Reduce:", customReduce(numbers, (acc, x) => acc + x, 0));
console.log("Custom Filter:", customFilter(numbers, x => x % 2 === 0));
console.log("Custom FlatMap:", customFlatMap(numbers, x => [x, x * 2]));


function reverseString(str) {
    // Convert string to array, reverse the array, and join it back
    return str.split("").reverse().join("");
}

// Example usage
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(`Original String: ${originalString}`);
console.log(`Reversed String: ${reversedString}`);

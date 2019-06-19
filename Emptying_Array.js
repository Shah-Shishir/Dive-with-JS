// Emptying_Array

let numbers = [1,2,3,4,5,6];

// When the array has no reference
numbers = [];
console.log(numbers);

// When the array has multiple references
numbers = [1,2,3,4,5,6];
numbers.length = 0;
console.log(numbers);

// Noisy method
numbers = [1,2,3,4,5,6];
console.log(numbers.splice(0,numbers.length));
console.log(numbers);

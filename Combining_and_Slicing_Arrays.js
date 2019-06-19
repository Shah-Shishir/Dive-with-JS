// Combining_and_Slicing_Arrays

let a1 = [1,2,3];
let a2 = [4,5,6];
let combined = a1.concat(a2);

console.log([...a1, ...a2]);
console.log([-1, -2, ...a1, 4, 5, ...a2, 8]);
console.log(combined);
console.log(combined.slice());
console.log(combined.slice(2,4));
console.log(combined.slice(2));

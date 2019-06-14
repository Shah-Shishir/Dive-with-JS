// Value Type VS Reference Type
 
let x = 10;
let y = x;
x = 20
console.log(x,y);
 
x = {value : 10};
y = x;
x.value = 20;
console.log(x,y);

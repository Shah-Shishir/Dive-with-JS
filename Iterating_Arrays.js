// Iterating_Arrays

let numbers = [1,2,3];

for (let i in numbers)
	console.log(i,numbers[i]);
	
for (let nums of numbers)
	console.log(nums);
	
numbers.forEach(number => console.log(number));

numbers.forEach((number,index) => console.log(index,number));

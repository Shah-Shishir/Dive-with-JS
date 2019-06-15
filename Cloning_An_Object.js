// Cloning_An_Object

let circle = {
	radius : 1,
	color : 'blue'
};

// Naive Process
let another = {};
for (let key in circle)
	another[key] = circle[key];
console.log(another);

// Standard Process
another = Object.assign ({ isVisible : true },circle);
console.log(another);

// Simplest Process with the Spread Operator
another = {...circle};
console.log(another);

// Enumerating_Object_Properties

function Circle (radius) {
	this.radius = radius;
	this.draw = function () { console.log('draw') };
}

const circle = new Circle (1);

console.log(circle);

for (let key in circle)
	console.log(key,circle[key]);
	
for (let key in circle)
	if (typeof circle[key] !== 'function')
		console.log(key,circle[key]);
		
if ('radius' in circle)
	console.log('Circle has a radius');

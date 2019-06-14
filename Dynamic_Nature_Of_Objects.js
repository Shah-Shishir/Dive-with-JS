// Dynamic_Nature_Of_Objects

const circle = {
	radius : 1,
	location : {
		x : 1,
		y : 1
	}
};

circle.color = "blue";
circle.radius = 2;

console.log(circle);

delete circle.radius;
delete circle.color;

console.log(circle);

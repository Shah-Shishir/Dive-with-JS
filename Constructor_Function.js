// Constructor Function
 
function CreateCircle(radius)
{
	this.radius = radius;
	this.draw = function () { console.log("draw"); }
}
 
console.log(CreateCircle(1));

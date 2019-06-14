// Constructor Function
 
function CreateCircle(radius)
{
	this.radius = radius;
	this.draw = function () { console.log("draw"); }
}
 
console.log(new CreateCircle(1));

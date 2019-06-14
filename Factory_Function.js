// Factory Function

function createCircle(radius) {
	return {
		radius,
		draw () { console.log("draw"); }
	};
	
	return circle;
}

console.log(createCircle(1));

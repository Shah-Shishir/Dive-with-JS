// Enumerating_Properties_Of_An_Object
 
let circle = {
	radius : 1,
	color : 'blue',
	location : {
		x : 1,
		y : 1
	}
};
 
for (let key in circle)
	console.log(key,circle[key]);
 
if ('radius' in circle)
	console.log('yes');
else
	console.log('no');	
 
if ('isVisible' in circle)
	console.log('yes');
else
	console.log('no');

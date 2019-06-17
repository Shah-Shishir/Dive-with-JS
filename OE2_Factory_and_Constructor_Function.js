//factory_function

function createAddress (street, city, zipCode) {
	return {
		street,
		city,
		zipCode
	};
}

console.log('factory_function');
console.log (createAddress('a','b','c'));

//constructor_function

function CreateAddress (street, city, zipCode) {
	this.street = street;
	this.city = city;
	this.zipCode = zipCode;
}

console.log('constructor_function');
console.log (new CreateAddress('a','b','c'));

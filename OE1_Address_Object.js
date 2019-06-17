let address = {
	street : 'A',
	city : 'B',
	zipCode : 'c'
};
 
function showAddress (address) {
	for (let key in address)
		console.log(key,':',address[key]);
}
 
showAddress (address);

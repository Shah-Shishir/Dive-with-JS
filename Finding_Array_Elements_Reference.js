// Finding_Array_Elements_Reference

let courses = [
	{ id : 1, name : 'a'},
	{ id : 2, name : 'b'},
	{ id : 3, name : 'a'},
];

let course = courses.find (function (course) { return course.name == 'a'});
console.log(course);

course = courses.findIndex (function (course) { return course.name == 'a'});
console.log(course);

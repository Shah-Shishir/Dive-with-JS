function blogPost (title, body, author) {
	this.title = title,
	this.body = body, 
	this.author = author,
	this.views = 0;
	this.comments = [];
	this.isLive = false;
};

console.log (new blogPost('a','b','c'));

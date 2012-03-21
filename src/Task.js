function task (what, completed) {
	this.what = what
	this.completed = typeof completed !== 'undefined' ? completed : false
}

task.prototype.complete = function() {
	this.completed = true;
}
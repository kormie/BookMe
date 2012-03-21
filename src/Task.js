function task (what) {
	this.what = what
	this.completed = false
}

task.prototype.complete = function() {
	this.completed = true;
}
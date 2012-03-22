function taskList() {
	this.list = []
	return this
}

taskList.prototype.contains = function(item) {
	for (var i=0; i < this.list.length; i++) {
		if (item == this.list[i]) { return true };
	};
}

taskList.prototype.addTask = function(task){
	this.list.push(task)
	return this
}

taskList.prototype.completedTasks = function(){
	completed = []
	for (var i=0; i < this.list.length; i++) {
		if (this.list[i].completed == false) {
			completed.push(this.list[i]);
		};
		return completed;
	};
}
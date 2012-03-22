describe("Task List", function() {
	
	var list1
	var list2
	var testTaskList
	
	beforeEach(function() {
		list1 = new task("One");
		list2 = new task("Two");
		testTaskList = new taskList();
		testTaskList.addTask(list1);
	});
	
  it("can add a task", function() {
		expect(testTaskList.contains(list1)).toBeTruthy();
		});
		
	it("holds more than one task", function() {
			var list15 = new task("Fifteen");
			testTaskList.addTask(list2);
			expect(testTaskList.contains(list1)).toBeTruthy();
			expect(testTaskList.contains(list2)).toBeTruthy();
			expect(testTaskList.contains(list15)).toBeFalsy();
		});
		
		describe("with active and completed tasks", function() {
		  it("can return only completed tasks", function() {
				var list3 = new task("Three", true);
				testTaskList.addTask(list3);
				var completedList = testTaskList.completedTasks();
				expect(completedList).toNotContain(list3);
		  });
		});
});
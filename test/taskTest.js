describe("Task", function() {
	
  it("can be created with a 'what' attribute", function() {
  var testTask = new task("Something to do");
    expect("Something to do").toEqual(testTask.what);
  });
	
	describe("when created", function() {
		var testTask
		beforeEach(function() {
		  testTask = new task("Hunt down the author of JAVA");
		});
		
		it("defaults to active", function() {
	  	expect(testTask.completed).toEqual(false);
		});
		
		it("can be marked as completed", function() {
	  	testTask.complete();
			expect(testTask.completed).toEqual(true);
		});
	
	});
});
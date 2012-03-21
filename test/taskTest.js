describe("Task", function() {
	var testTask
	beforeEach(function() {
	  testTask = new task("Hunt down the author of JAVA");
	});
	
	describe("when created", function() {
		
	  it("has a 'what' attribute", function() {
	    expect("Hunt down the author of JAVA").toEqual(testTask.what);
	  });
		
		it("defaults to active", function() {
	  	expect(testTask.completed).toEqual(false);
		});
		
		describe("and active", function() {
		  
			it("can be marked as completed", function() {
		  	testTask.complete();
				expect(testTask.completed).toEqual(true);
			});
			
		});
	
	});

});
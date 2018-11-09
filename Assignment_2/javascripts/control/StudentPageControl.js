var createStudent = (function() {

	// Option 1 - Use addEventListener to register event handler (No Handlebars)
	function StudentPageControl() {
		var add_elm = document.getElementById('add_student_id');
		
		// define the event handler for Add button 
		add_elm.addEventListener('click', function(event) {
		
			// Get the input and create a Students (model) object.
			var ln = document.getElementById('ln_id').value; 
			console.log(test); 
			var p_obj = new test.model.Student("", ""); //temporary variable to access the list.
			
			// Create the view 
  			var list_view = new test.view.ListView(p_obj.getStudentsByLastName(ln));
		});
	}

	// make sure the page is fully loaded before registering event handler (Handlebars)
	window.addEventListener('load', function(event) {
		StudentPageControl();
	}); 
	
	return createPerson; 
	
})()
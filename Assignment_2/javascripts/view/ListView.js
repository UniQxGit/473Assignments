test = ( function () {
	//
	function ListView(data) {
		var ul_node = document.getElementById('student_list_id');
		this.root = ul_node;
		this.nameList = data; 
		
		// Option 1
		this.createChildNodeDOMApi();
	}

	ListView.prototype.createChildNodeDOMApi = function() {
		// empty child nodes
		while (this.root.firstChild) {
			this.root.removeChild(this.root.firstChild); 
		}
		//

		for (i=0; i<this.nameList.length; i++) {
			var li_node = document.createElement('li');
			var li_content = document.createTextNode(this.nameList[i].getString());
			console.log(i);
			var student = this.nameList[i];
			li_node.addEventListener('click', this.updateTable(student)); //Create event for name click.
			li_node.appendChild(li_content);
			this.root.appendChild(li_node);  

		}	
		console.log("done");
	}

	//Returns a function to event listener paramater. Trick to keep within scope of passed variables.
	ListView.prototype.updateTable = function(student) {
		return function () {
			var name_node = document.getElementById("student_name"); //To update the name in "Grades For ___"
			name_node.innerHTML = student.getString();

			var table_node = document.getElementById("student_grades_id"); //Root of table.
			
			// empty child nodes except the heading.
			while (table_node.children.length>1) {
				table_node.removeChild(table_node.lastChild); 
			}

			for (i=0; i<student.grades.length; i++)
			{
				var table_row_node = document.createElement('tr');
				
				var table_course_node = document.createElement('td');
				var table_course_content = document.createTextNode(student.grades[i].course);
				table_course_node.appendChild(table_course_content); //link content to gpa node.

				var table_gpa_node = document.createElement('td');
				var table_gpa_content = document.createTextNode(student.grades[i].gpa);
				table_gpa_node.appendChild(table_gpa_content); //link content to gpa node

				table_row_node.appendChild(table_course_node); //Link course data to row
				table_row_node.appendChild(table_gpa_node); //link gpa data to row.
				table_node.appendChild(table_row_node); //link row to main table.

				console.log("Course: " + student.grades[i].course + " GPA: " + student.grades[i].gpa);
			}
		};
	}
			
	if (window.testApp == undefined) {
		window.testApp = {};
	}

	if (window.testApp.view == undefined) {
		window.testApp.view = {}; 
	}
	
	window.testApp.view.ListView = ListView; 
	
	return window.testApp; 
})(); 
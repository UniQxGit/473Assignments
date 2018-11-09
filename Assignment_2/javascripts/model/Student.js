test = ( function(){
	student_set = new Array();

	function Student(fn,ln) {
		this.first_name = fn;
		this.last_name = ln;
		this.grades = new Array();
	}

	function Grades(course,gpa)
	{
		this.course = course;
		this.gpa = gpa;
	}

	Student.prototype.getString = function() {
		return this.first_name + " " + this.last_name; 
	}

	// return the list of student objects created
	Student.prototype.getAllStudents = function() {
		return student_set; 
	}

	Student.prototype.getStudentsByLastName = function(ln) {
		matched_students = new Array();
		for (i=0; i < student_set.length; i++)
		{
			if (student_set[i].last_name == ln)
			{
				matched_students.push(student_set[i]);
			}
		}
		return matched_students;
	}

	// add the newly created student object to the list 	
	Student.prototype.add = function(p_obj) {
		student_set.push(p_obj); 
		console.log(student_set); 
	}

	Student.prototype.addGrade = function(course,gpa) {
		grade = new Grades(course,gpa);
		this.grades.push(grade);
		console.log(this.grades); 
	}

	if (window.testApp == undefined) {
		window.testApp = {};
	}

	if (window.testApp.model == undefined) {
		window.testApp.model = {}; 
	}
	
	window.testApp.model.Student = Student; 
	
	return window.testApp; 	
})();
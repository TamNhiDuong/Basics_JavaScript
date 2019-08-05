// 10.05 JavasScript code

// Create an array of Course objects
var jsonCourses = 
    // INSERT THE SWD1TTF001 COURSE HERE
    '{"courses":[' + 
	'{"name": "Orientation to software engineering", "code": "SWD1TF001", "extent": "5", "timing": "1.semester" },' + '{"name": "Programming", "code": "SWD1TF002", "extent": "5", "timing": "2.semester" },' +
	'{"name": "Data management and databases", "code": "SWD1TF003", "extent":"5", "timing": "2.semester"},' + '{"name": "Mobile development project", "code": "SWD1TF004", "extent": "10", "timing": "3.semester"}]}';

function listCourses() {
    // INSERT YOUR CODE HERE

var obj = JSON.parse(jsonCourses);
	
	for (var i = 0; i < obj.courses.length; i++) {
		output = "Code: " + obj.courses[i].code + "<br/>" + 
			      "Name: " + obj.courses[i].name + "<br/>" + 
			      "Extent: " + obj.courses[i].extent + "<br/>" + "Timing: " + obj.courses[i].timing + "<br>" + "<br/>";
		document.getElementById("divOutput").innerHTML += output;
	}

}
listCourses()
// INSERT YOUR CODE HERE

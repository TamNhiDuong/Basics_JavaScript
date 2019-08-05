// 10.01 JavasScript code
//  Create a JavaScript object that includes facts about one student
var student = {
	studentNumber: "a1802305"
	, firstName: "Nhi"
	, lastName: "Duong"
	, streetAddress: "Kilonrinne 10"
	, posCode: 02610
	, city: "Espoo"
};
var studentNumber = student["studentNumber"];
var fullName = student.firstName + " " + student.lastName;
var address = student["streetAddress"] + " " + student["posCode"] + " " + student["city"];
//adding more features to object
var student = new Object();
student.birthDay = "08.10.1997";
document.getElementById("divOutput").innerHTML = "Student Number: " + studentNumber + "<br/>" + "Name:" + fullName + "<br/>" + "Address: " + address + "<br/>" + "Birth Day: " + student.birthDay;
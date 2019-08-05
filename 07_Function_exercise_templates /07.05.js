// 07.05 JavasScript code
// 1. Complete the code of the function showSalary
function calculateSalary(txtHours, txtHourlySalary) {
	// 1.1 Calculate gross salary
	var calculate = txtHours * txtHourlySalary;
	// 1.2 Return the gross salary with the return statement
	return calculate;
}
// 2. Complete the code of the function showSalary
function showSalary() {
	// 2.1 Get values from the input fields
	var txtHours = document.getElementById("txtHours").value;
	var txtHourlySalary = document.getElementById("txtHourlySalary").value;
	// 2.2 Call the calculateSalary function to determine the gross salary
	var call = calculateSalary(txtHours, txtHourlySalary);
	// 2.3 Show the answer on the web page
	document.getElementById("divOutput").innerHTML = call;
}
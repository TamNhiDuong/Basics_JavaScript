// 05.06 JavasScript code
function calculateUnitFine() {
	// 1. Read the value from the input field into a variable
	var txtNetIncome_element = document.getElementById('txtNetIncome');
	var txtNetIncome = parseInt(txtNetIncome_element.value);
	// 2. Calculate the unit fine and assign the result into another variable
	var calculate = (txtNetIncome - 255) / 60;
	// 3. Write the answer to the web page DOM, in the answer div, as the content
	var num = calculate;
	var n = num.toFixed(2);
	document.getElementById("divAnswer").innerHTML = "Unit Fine is " + n;
}
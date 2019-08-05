// 06.01 JavasScript code
function calculateFee() {
	// Read value from the input field
	var txtPrice_element = document.getElementById('txtPrice');
	var txtPrice = parseInt(txtPrice_element.value);
	// Calculate fee, save the result to a variable
	var calculate = txtPrice * 3.44 / 100;
	// If the fee is under minimum, change the fee
	if (calculate < 2400) {
		show = "Real state agent's fee is 2400.00 euros";
	}
	else {
		show = "Real state agent's fee is " + calculate;
	}
	// Write the answer on the page, to the divFeeOutput div, as content of the div
	document.getElementById("divAnswer").innerHTML = show;
}
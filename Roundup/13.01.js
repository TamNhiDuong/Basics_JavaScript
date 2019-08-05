function convert() {
	var temperature = document.getElementById("temperature").value;
	var selectors = document.getElementById("conversion");
	var strUser = selectors.options[selectors.selectedIndex].value;
	//caculate
	if (strUser === "Fahrenheit to Celsius") {
		var calculate = (temperature - 32) * 5 / 9;
	}
	else {
		var calculate = (temperature * 1.8) + 32;
	}
	document.getElementById("result").innerHTML = calculate;
}
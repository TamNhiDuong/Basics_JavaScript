// 06.05 JavasScript code
function calculateBMI() {
	// assign input to variables
	var txtWeight_element = document.getElementById('txtWeight');
	var txtWeight = parseInt(txtWeight_element.value);
	var txtHeight_element = document.getElementById('txtHeight');
	var txtHeight = parseInt(txtHeight_element.value);
	// calculate 
	var calculate = txtWeight / (txtHeight / 100 * txtHeight / 100);
	var num = calculate;
	var n = num.toFixed(2);
	if (calculate <= 18.4) {
		show = "Body Mass Index (BMI) is " + n + " so Weight is less than Normal Weight";
	}
	else if (calculate >= 18.5 && calculate <= 24.9) {
		show = "Body Mass Index (BMI) is " + n + " so this is Normal Weight";
	}
	else {
		show = "Bosy Mass Index (BMI) is " + n + " so Weight is bigger than Normal Weight";
	}
	document.getElementById('divAnswer').innerHTML = show;
}
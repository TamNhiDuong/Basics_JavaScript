// 08.05 JavasScript code
function showWeightGoals() {
	var weightInput = parseInt(document.getElementById("txtWeight").value);
	var calculate = (weightInput * 0.1) / 7;
	var text = "";
	var i;
	for (i = 1; i <= 7; i++) {
		weightInput -= calculate;
		text += "After " + i + " week, the target weight is " + weightInput.toFixed(1) + " kg" + "<br>";
	}
	document.getElementById("pOutput").innerHTML = text;
}
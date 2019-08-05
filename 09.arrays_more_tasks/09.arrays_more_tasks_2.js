function insertValue() {
	var input = document.getElementById("txtValue").value;
	var bloodTypes = ["A+", "O-", "AB+", "O+", "AB+", "AB+", "O-", "AB+", "O-", "AB+"];
	var arrayLength = bloodTypes.length;
	var count = 0;
	for (var i = 0; i < arrayLength; i++) {
		if (bloodTypes[i] == input) {
			count++;
			var percentage = (count * 100) / arrayLength;
		}
	}
	document.getElementById("pOutput").innerHTML = input + " " + percentage + " percent";
}
// Global var:
var names = [];
var ages = [];

function save() {
	// Taking input
	var name = document.getElementById("txtName").value;
	var age = document.getElementById("txtAge").value;
	// Adds a new element to the end of the array
	names.push(name);
	ages.push(age);
	// Write the names on the page
	document.getElementById('divOutput').innerHTML = "Current members: " + names.length;
	// Empty the input field of name and age
	document.getElementById('txtName').value = "";
	document.getElementById('txtAge').value = "";
}

function showMinors() {
	var output = "";
	for (var i = 0; i < names.length; i++) {
		if (ages[i] < 18) {
			output += names[i] + ":" + ages[i] + "</br>";
			// Why every line does not break???? Will fix later
		}
	}
	document.getElementById('divOutput').innerHTML = output;
}

function showAdults() {
	var output2 = "";
	for (var i = 0; i < names.length; i++) {
		if (ages[i] >= 18) {
			output2 += names[i] + ":" + ages[i] + "</br>";
		}
	}
	document.getElementById('divOutput').innerHTML = output2;
}

function showOldest() {
	var max = 0;
	for (var i = 0; i < names.length; i++) {
		if (ages[i] > max) {
			max = ages[i];
			var namesOldest = names[i];
		}
	}
	document.getElementById('divOutput').innerHTML = max + ":" + namesOldest;
}

function showYoungest() {
	var min = ages[0];
	for (var i = 0; i < names.length; i++) {
		if (ages[i] < min) {
			min = ages[i];
			var agesYoungest = names[i];
		}
	}
	document.getElementById('divOutput').innerHTML = min + ":" + agesYoungest;
}
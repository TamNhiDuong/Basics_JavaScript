// 09.08 JavasScript code
// Define the array variable inside the script element, but NOT inside the function. 
var names = [];
// Then they will be global and thus available for all functions to read from or write to.
function addName() {
	// Assign name from the input field to the array
	var name = document.getElementById('txtName').value;
	names.push(name);
	var output = "";
	// Go through the array in a for loop adding each name at the end of the namesText
	for (var i = 0; i < names.length; i++) {
		output += names[i] + ", ";
	}
	// Write the names on the page, to the names div, as content of the div
	document.getElementById('divNameList').innerHTML = "Inserted names: " + output;
	// Empty the input field of name as that name was just put in the array
	document.getElementById('txtName').value = "";
	// Empty the answer text
	//document.getElementById('divOutput').value = "";
}

function makeDraw() {
	// Randomize the index of the winner
	var winningIndex = Math.floor(Math.random() * names.length);
	var winner = names[winningIndex];
	// Write the answer on the page
	document.getElementById('divOutput').innerHTML = "Winner is: " + winner;
}
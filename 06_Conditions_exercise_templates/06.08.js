// 06.08 JavasScript code
function play() {
	// Read value from the input field
	var txtBet_element = document.getElementById('txtBet');
	var txtBet = parseInt(txtBet_element.value);
	// Randomize dice pips between 1-6
	var pips = Math.round((Math.random() * 5) + 1);
	// Calculate win base on pips
	var win1 = txtBet * 1.25;
	var win2 = txtBet * 1.5;
	// Write the answer on the page, to the answer div, as content of the div
	if (pips == 1 || pips == 3 || pips == 5) {
		show = "Pips was " + pips + "-NO PAY";
	}
	else if (pips == 2 || pips == 4) {
		show = "Pips was " + pips + "-PAID back: " + win1;
	}
	else {
		show = "Pips was " + pips + "-PAID back: " + win2;
	}
	document.getElementById('divAnswer').innerHTML = show;
}
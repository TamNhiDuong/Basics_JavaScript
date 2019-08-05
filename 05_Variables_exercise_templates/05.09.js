// 05.09 JavasScript code
function calculateRent() {
	//1. Reading the input "Rent"
	var rent_element = document.getElementById('rent');
	var rent = parseInt(rent_element.value);
	//2. Reading the input "Participants"
	var participants_element = document.getElementById('participants');
	var participants = parseInt(participants_element.value);
	//3. Calculate
	var calculate = rent / participants;
	//4. Print result
	var num = calculate;
	var n = num.toFixed(2);
	document.getElementById("divAnswer").innerHTML = "Rent per participant is " + n + " euros";
}
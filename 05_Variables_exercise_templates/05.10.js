// 05.10 JavasScript code
function calculateCosts() {
	//1. Reading the input "kilometers"
	var kilometers_element = document.getElementById('kilometers');
	var kilometers = kilometers_element.value;
	//2. Reading the input "consumption"
	var consumption_element = document.getElementById('consumption');
	var consumption = consumption_element.value;
	//3. Reading the input "price"
	var price_element = document.getElementById('price');
	var price = price_element.value;
	//4. reading the input "participants"
	var participants_element = document.getElementById('participants');
	var participants = participants_element.value;
	//5. Calculate
	var calculate = ((kilometers * consumption * price) / (participants * 100));
	//6. Print result
	var num = calculate;
	var n = num.toFixed(2);
	document.getElementById("divAnswer").innerHTML = "Fuel costs per participant is " + n + " euros.";
}
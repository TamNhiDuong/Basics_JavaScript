function show() {
	var lottery = [];
	for (var i = 0; i < 7; i++) {
		var randomIndex = Math.floor(Math.random() * 39) + 1;
		lottery.push(randomIndex);
	}
	document.getElementById('divOutput').innerHTML = lottery.join('\r\n');
}
var i;
var winCounter;
var sum = 0;
for (i = 1; i <= 100; i++) {
	// Let win counter cumulating during every round of the loop.
	// Randomize pips between 1-6 calling Math.round( (Math.random( ) * 5) + 1 );
	var pips = Math.round((Math.random() * 5) + 1);
	// If the randomized pips is 1, 3 or 5, then no pay
	if (pips == 1 || pips == 3 || pips == 5) {
		winCounter = 0;
	}
	// Otherwise if the pips 2 and 4 return the set coins back 125% (=multiplied by 1.25)
	else if (pips == 2 || pips == 4) {
		winCounter = 1 * 1.25;
	}
	// Otherwise the pips 6 returns the inserted bet 150%	
	else {
		winCounter = 1 * 1.5;
	}
	sum = sum + winCounter;
	console.log(sum);
}
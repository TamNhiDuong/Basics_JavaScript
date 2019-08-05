// Looping random aphorism 
var aphotismArray = ["Once you have accepted your flaws, no one can use them against you- Tyrion Lannister."
					, "A mind needs books as a sword needs a whetstone, if it is to keep its edge- Ned Stark."
					, "Never forget what you are, the rest of the world will not, wear it like armor and it can never be used to hurt you- Tyrion Lannister."
					, "Chaos isn't a pit. Chaos is a ladder- Little Finger."
					, "People will forget what you did, people will forget what you said, but people will never forget how you made them feel- Maya Angelou."];
var i;
for (i = 0; i < aphotismArray.length; i++) {
	var index = Math.floor(Math.random() * 5);
	output = aphotismArray[index];
}
document.getElementById('pOutput').innerHTML = output;
// End
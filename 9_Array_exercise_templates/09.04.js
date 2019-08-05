// 09.04 JavasScript code
// Create an array with minigolf results of eight players 
// (23, 19, 37, 20, 21, 30, 26, 24)
var minigolf = [23, 19, 37, 20, 21, 30, 26, 24];
minigolf.length;
// Sort the array
minigolf.sort();
// Assign the smallest result to a variable
var smallest = minigolf[0];
// Assign the biggest result to a variable
var biggest = minigolf[minigolf.length - 1];
// Write the answer on the page
output = "The smallest result is " + smallest + " (winner)" + "<br/>" + "The biggest result is " + biggest
document.getElementById("pOutput").innerHTML = output;
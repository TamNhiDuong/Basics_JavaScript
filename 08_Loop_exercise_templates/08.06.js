// 08.06 JavasScript code

function showComparisonScores() {
var vote = parseInt(document.getElementById("txtVotes").value);
var candidate = parseInt(document.getElementById("txtCandidates").value);
var text = "";
    // For each candidate
for (i = 1; i <= candidate; i++) {
var calculate = vote / i;
text += i + "." + "candidate: " + calculate.toFixed(0) + "</br>";
}

document.getElementById("pOutput").innerHTML = text; 
}

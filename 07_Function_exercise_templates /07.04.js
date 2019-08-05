// 07.04 JavasScript code
function randomInteger(from, to) {
    // Generate a random number between 'from' and 'to' and return it.
    from = Math.ceil(from);
    to = Math.floor(to);
    var randomInteger = Math.floor(Math.random() * (to - from + 1)) + from;
    return randomInteger;
}

function rollTheDice() {
    // (1) Call the function randomInteger(from, to) with parameter values 1 and 6.
    var randomInteger = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    //     - Assign the return value of the function to the variable diceValue.
    var diceValue = randomInteger;
    document.getElementById("divOutput").innerHTML = diceValue;
    // (2) Dispaly the value of the variable diceValue.
}
// Arrays kept in two global variables. Global = not defined inside functions
// => can be used by all the functions. Even in other JS script files later.

// Too lazy to enter names all the time? Pre-insert hard-coded test data:
// Some times called "seeding".
var names  = [  "Joe",  "Mike", "Lisa", "Marie",    "Lee"];
var scores = [  4,      65,     78,     52,         70];

// ----------------------------------------------------------------------------
function addPlayer() {
    // Reading input
    var name = document.getElementById("txtName").value;
    var score = Number(document.getElementById("txtScore").value);

    //alert("Name: " + name + ", score: " + score);  // Just for quick testing
    // Adding the player info to the two arrays
    names.push(name);
    scores.push(score);

    // Clearing input fields
    document.getElementById("txtName").value = "";
    document.getElementById("txtScore").value = "";
}
// ----------------------------------------------------------------------------
function listPlayers() {
   
    // Starting the output text building with the common item, start tag for ul
    var outputText = "<ul>";

    // Then going through all the players one by one
    for (var i = 0; i < names.length; i++) {
        // Adding an list item per each player
        outputText = outputText + "<li>"+names[i] + " : " + scores[i]+"</li>";
    }

    // Adding common item after the loop, the closing tag of unordered list
    outputText = outputText + "</ul>";     // OR outputText += "</ul>";

    // Writing the output at once to the DOM
    document.getElementById("pOutput").innerHTML = outputText;
}
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------


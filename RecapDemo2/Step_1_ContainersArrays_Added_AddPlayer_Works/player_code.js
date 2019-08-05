// Arrays kept in two global variables. Global = not defined inside functions
// => can be used by all the functions. Even in other JS script files later.
var names = [];
var scores = [];

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

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------


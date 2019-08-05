// 07.09 JavasScript code

// Complete the code of the function tellAge.
function tellAge() {

    // 1. Read birth year from the input field 

var birthYear = parseInt(document.getElementById('txtBirthYear').value);
    // 2. Figure out the current date into today variable 
var today = new Date();

    // 3. Use the getFullYear() method to get the current year out from the today variable
var currentYear = today.getFullYear();
document.getElementById('divOutput').innerHTML = "Current year is" + currentYear;
    // 4. Calculate (rough estimate of) the age
var calculate = currentYear - birthYear;
   
    // 5. If age is less than zero, then show an error message, otherwise show the age.
 if (calculate < 0) {
        show = "Error- Please enter year of birth again";
    }
    else {
    show = "You are now " + calculate;
    }
document.getElementById('divOutput').innerHTML = show;
}
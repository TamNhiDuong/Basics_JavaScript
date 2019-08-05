// 06.02 JavasScript code
function checkAge() {
    // Assign the age input field value into a variable
    var txtAge_element = document.getElementById('txtAge');
    var txtAge = parseInt(txtAge_element.value);
    // if the age is smaller than 18
    if (txtAge < 18) {
        // assign text "Adolescents are not allowed to play." to a variable
        // otherwise 
        show = "Adolescents are not allowed to play.";
    }
    // assign text "Old enough to play." to a variable  
    else {
        show = "Old enough to play.";
    }
    // Write the answer to the answer div, as the content
    document.getElementById('divAnswer').innerHTML = show;
}
// 06.03 JavasScript code
function comparePackages() {
    // assign input field values into a variables
    var txtMessages_element = document.getElementById('txtMessages');
    var txtMessages = txtMessages_element.value;
    var txtCallTime_element = document.getElementById('txtCallTime');
    var txtCallTime = txtCallTime_element.value;
    // calculate the costs of the Special Package
    var calculate = (txtCallTime * 0.069) + (txtMessages * 0.069) + 19.9;
    // If the Special package is cheaper than the All-inclusive package 
    if (calculate < 29.90) {
        // assign text "The Special package (XX.XX) is cheaper than the All-inclusive package (29.90)"
        // to a variable
        show = "The Special package " + calculate + " is cheaper than the All-inclusive package (29.90)";
    }
    // otherwise
    // assign text "The All-inclusive package (29.90) is cheaper than the Special package (XX.XX)"
    // to a variable
    else {
        show = "The All-inclusive package (29.90) is cheaper than the Special package " + calculate;
    }
    // write the answer to the answer div, as the content
    document.getElementById('divAnswer').innerHTML = show;
}
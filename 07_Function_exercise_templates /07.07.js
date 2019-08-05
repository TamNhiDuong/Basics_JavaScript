// 07.07 JavasScript code

// Complete the code of the function processName
function processName() {

    // 1. Read value of name from the input field

var txt = document.getElementById('txtNname').value;
    
    // 2. Show it with "ALL CAPS" using toUpperCase()
document.getElementById('divUpperCase').innerHTML = txt.toUpperCase();


    // 3. Show it with  "all small letters" using toLowerCase()
document.getElementById('divLowerCase').innerHTML = txt.toLowerCase();

    // 4. Tell how many characters are there (length, includes also all spaces) 

document.getElementById('divLength').innerHTML = txt.length;

    // 5. Tell, whether the input string contains the word 'muumi'
var searchTerm = 'muumi';
var indexOfFirst = txt.indexOf(searchTerm);
    if (indexOfFirst > 0) {
        show = "Contains the word " + "'" + searchTerm + "'";
    }
    else {
        show = "Does not contain " +  "'" + searchTerm + "'";
    }
document.getElementById('divContains').innerHTML = show;
    // 6. Tell the first character using charAt()
document.getElementById('divFirstCharacter').innerHTML = txt.charAt(0);

    // 7. Tell which ones are the first three characters using substr().
var res = txt.substr(0,3);
document.getElementById('divManyCharacters').innerHTML = res; 
}

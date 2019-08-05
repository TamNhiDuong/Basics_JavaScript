// 07.10_functions JavasScript code

// Define here the following functions: allCapsTitleTrimmed(originalText) and isSunday(dateText). 

// Title-toUpperCase & Take away white space
function allCapsTitleTrimmed() {
    var myTitle = document.getElementById('txtTitle');
    myTitle.value = myTitle.value.toUpperCase();
    return myTitle;
}
// Check if working date is Sunday or not? (Sunday= double salary )
function isSunday() {

    // Taking date
    var inputDate = document.getElementById("txtDate").value;
    // Split the given date text into day, month and year
    var split = inputDate.split(".");
    // Create new date 
    var asDate = new Date();
    // Set day, month, year
    var date = split[0];
    var day = split[0];
    var month = split[1];
    var year = split[2];

    var getDate = new Date(day, month, year).getDay();
    var output;
    if (getDate == 0) {
        rel = true;
    }
    else {
        rel = false;
    }
    return rel;
}

// Calling other function for final calculation
function calculate() {
// Taking all values
    var startTime = document.getElementById("txtStartTime").value;
    var endTime = document.getElementById("txtEndTime").value;
    var description = document.getElementById("txtDescription").value;
// Splitting time for later calculation
    // (1) Split start time
    var startTimeSplit = startTime.split(":");
    var startHour = startTimeSplit[0];
    var startMinute = startTimeSplit[1];
    // (2) Split end time
    var endTimeSplit = endTime.split(":");
    var endHour = endTimeSplit[0];
    var endMinute = endTimeSplit[1];
    // Calculating working time
    var totalWorkingTime = (endHour * 60 + +endMinute) - (startHour * 60 + +startMinute);
    // Calling checking date function
    var weekDay = isSunday();
    if (isSunday() == true) {
       dayName = "Sunday is 72 EUR.";
    }
    else {
       dayName = "Workdays is 48 EUR.";
    }
    var workingPrice;

    if (weekDay == true) {
        workingPrice = totalWorkingTime * 1.2;
    }
    else {
        workingPrice = totalWorkingTime * 0.8;
    }
    // Print output
    document.getElementById("divOutput").innerHTML = "Length of the work was " + totalWorkingTime + " minutes." + "<br>" + "The hourly price is during the " + dayName + "<br>" + "The price of this work is " + workingPrice + " EUR." + "<br>" + "Your working description is " + "'" + description + "'.";  
}
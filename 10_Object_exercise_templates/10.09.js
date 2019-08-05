// 10.09 JavasScript code

// This function fetches JSON data asynchronously from Internet using an AJAX call.
function fetchWeatherInfo() {
    var urlString = "http://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&APPID=c60a113c17f14e02f1a3236fdc9ce4e1"; //url with my API key, for city Helsinki, Unit: metric
    
    var weatherQuery = new XMLHttpRequest();                    // We use an XMLHttpRequest object for the data communication
    weatherQuery.onreadystatechange = weatherQueryListener;     // Set the event-listener function that handles the server's response
    weatherQuery.open("GET", urlString, true);                  // Set the URL where the request is to be sent
    weatherQuery.send();                                        // Send the request to the server
            
    // This inner function is the event handler that will called when a response is received from the weather service.
    // Note: This function can acces all the variables defined in the outer function.
    function weatherQueryListener() {
        if (weatherQuery.readyState === 4 && weatherQuery.status === 200) {
            console.log("The weather service returned the following JSON string: \n\n" + weatherQuery.responseText);
            showWeatherInfo(weatherQuery.responseText);
        }
    }
}

// This function parses the JSON string and shows the data (description, temperature, wind speed, cloud %) on the web page.
function showWeatherInfo(jsonText) {

    // INSERT YOUR CODE HERE
    // Note 1: You can run this program first and see the JSON string in the Console Window
    // Note 2: The JSON response from the web server contains a weather info on a single city, not on an array of cities. Thus NO for loop is needed here.
    // Note 3: You need to write weather[0].description to get "description" out from the "weather" object 
    
    var weatherObject = JSON.parse(jsonText); 
	console.log(weatherObject);
	var outputText = "City: " + weatherObject.name + "<br/>" +
		"Description: " + weatherObject.weather[0].description + "<br/>" + "Temperature(metric/°C): " + weatherObject.main.temp + "<br/>" + "Wind(m/s): " + weatherObject.wind.speed + "<br/>" + "Humidity(%): " + weatherObject.main.humidity + "<br/>" + "Clouds(%): " + weatherObject.clouds.all;
	
	document.getElementById("divOutput").innerHTML = outputText;
}

fetchWeatherInfo();

// End
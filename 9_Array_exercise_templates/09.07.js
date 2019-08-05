// 09.07 JavasScript code
// Create an array with file names of images
var imageNames = ["images/face.png", "images/heart.png", "images/sun.png", "images/moon.png", "images/cloud.png", "images/anuko.png"];
// Use a for loop to show all the images.
var length = imageNames.length;
for (var i = 0; i < length; i++) {
	document.write("<img src='" + imageNames[i] + "' width='60' height='50'/><span>" + "</span>");
}
// Use the document.write() method to write one new image element to the web page per each image.
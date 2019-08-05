// 07.03 JavasScript code
function addImage(imgUrl) {
    var image = document.createElement("img");
    image.src = imgUrl;
    document.body.appendChild(image);
}
// WRITE YOUR OWN CODE BELOW
//Finland

var image = document.createElement("img");
image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/250px-Flag_of_Finland.svg.png";
document.body.appendChild(image);
//Sweden
var image = document.createElement("img");
image.src = "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/250px-Flag_of_Sweden.svg.png";
document.body.appendChild(image);
//Norway
var image = document.createElement("img");
image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/250px-Flag_of_Norway.svg.png";
document.body.appendChild(image);
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name' , myName);
    myHeading.textContent = 'Hello, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop touching my page!');s
}
var bloodTypes = ["A+", "O-", "AB+", "O+", "AB+", "AB+", "O-", "AB+", "O-", "AB+"];
var count = [];
bloodTypes.forEach(function (i) {
	count[i] = (count[i] || 0) + 1;
});
var count2 = count.map(myFunction);
console.log(count2);

function myFunction(value) {
	return value * 2;
}
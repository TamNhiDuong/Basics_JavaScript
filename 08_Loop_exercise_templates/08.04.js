window.onload = function () {
    var pips1 = Math.round((Math.random() * 5) + 1);
    var pips2 = Math.round((Math.random() * 5) + 1);
    var counter = 1;
    while (pips1 !== pips2) {
        var pips1 = Math.round((Math.random() * 5) + 1);
        var pips2 = Math.round((Math.random() * 5) + 1);
        counter += 1;
    }
    document.write("<h1>Same Pips</h1>")
    document.write("Same dice pips are: " + pips1 + " and " + pips2);
    document.write("</br>");
    document.write("There were " + counter + " randomization rounds until reach the same pips.")
};
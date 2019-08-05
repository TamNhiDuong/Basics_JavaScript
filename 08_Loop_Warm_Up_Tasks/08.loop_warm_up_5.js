// 08.loop_warm_up_5.js JavasScript code

// Task 1 (easy): Modify the JavaScript code so that it shows a multiplication table 1-9 by 1-9. 
// Task 2 (challenging): 
//         Modify the JavaScript code again so that it shows a multiplication table 5-10 by 5-10. 

document.write("<table>");

for (var x = 1; x <= 9; x++ ) {
    document.write("<tr>");
    document.write("<td>" + x + "</td>");

    for (var y = 2; y <= 9; y++ ) {
        document.write("<td>" + (x * y) + "</td>");
    }

    document.write("</tr>");
}

document.write("</table>"); 

// End
//Function1
function kelaPaid(length) {
    var length = parseInt(document.getElementById("txtLength").value);
    var kelaPay;
    if (length <= 10 && length > 0) {
        kelaPay = "Kela reimbursement is 8 EUR";
    }
    else if (length > 10 && length <= 20) {
        kelaPay = "Kela reimbursement is 11 EUR";
    }
    else if (length > 20 && length <= 30) {
        kelaPay = "Kela reimbursement is 13.5 EUR";
    }
    else if (length > 30 && length <= 40) {
        kelaPay = "Kela reimbursement is 16.5 EUR";
    }
    else if (length > 40 && length <= 50) {
        kelaPay = "Kela reimbursement is 21 EUR";
    }
    return kelaPay;
}
//function2
function customerPay(doctorsFee) {
var length = parseInt(document.getElementById("txtLength").value);
var doctorsFee = parseInt(document.getElementById("txtDoctorsFee").value);
var pay;
var txt;
    if (length <= 10 && length > 0) {
        pay = parseFloat(doctorsFee + 15.9 - 8);
        txt = "You need to pay " + pay + "EUR";
    }
    else if (length > 10 && length <= 20) {
        pay = parseFloat(doctorsFee + 15.9 - 11);
        txt = "You need to pay " + pay + "EUR";
    }
    else if (length > 20 && length <= 30) {
        pay = parseFloat(doctorsFee + 15.9 - 13.5);
        txt = "You need to pay " + pay + "EUR";
    }
    else if (length > 30 && length <= 40) {
        pay = parseFloat(doctorsFee + 15.9 - 16.5);
        txt = "You need to pay " + pay + "EUR";
    }
    else if (length > 40 && length <= 50) {
        pay = parseFloat(doctorsFee + 15.9 - 21);
        txt = "You need to pay " + pay + "EUR";
    }
    
    return txt;
}
//function3
function calculate() {
    var doctorsFee = parseInt(document.getElementById("txtDoctorsFee").value);
    var x = "Office Fee is 15.9 EUR"
    var y = "Doctor's Fee is " + doctorsFee + " EUR";
    var z = kelaPaid(length);
    var j = customerPay(doctorsFee);
    var demoOutput = document.getElementById("divOutput");
{
                    var html = "";
                    html += x + "<br/>";
                    html += y + "<br/>";
                    html += z + "<br/>";
                    html += j + "<br/>";
                    demoOutput.innerHTML = html;
}
}

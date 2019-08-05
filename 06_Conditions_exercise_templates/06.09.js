function tellInfractionFine() {
    //read input field of Driving Speed and Speed Limit
    var txtDrivingSpeed_element = document.getElementById('txtDrivingSpeed');
    var txtDrivingSpeed = txtDrivingSpeed_element.value;
    var txtSpeedLimit_element = document.getElementById('txtSpeedLimit');
    var txtSpeedLimit = txtSpeedLimit_element.value;
    //calculate excess speed
    var calculate = txtDrivingSpeed - txtSpeedLimit;
    //Nesting if
    //Big branch 1:
    if (calculate > 0 && calculate <= 15) {
        if (txtSpeedLimit > 0 && txtSpeedLimit <= 60) {
            show = "Infraction fine is 85.00 euros.";
        }
        else if (txtSpeedLimit >= 70 && txtSpeedLimit <= 120) {
            show = "Infraction fine is 70.00 euros.";
        }
    }
    //Big branch 2:
    else if (calculate > 15 && calculate <= 20) {
        if (txtSpeedLimit > 0 && txtSpeedLimit <= 60) {
            show = "Infraction fine is 115.00 euros";
        }
        if (txtSpeedLimit >= 70 && txtSpeedLimit <= 120) {
            show = "Infraction fine is 100.00 euros";
        }
    }
    //Big branch 3:
    else if (calculate == 0) {
        show = "No speeding, no fine";
    }
    //Big final branch: 
    else {
        show = "Income- based unit fine.";
    }
    document.getElementById('divAnswer').innerHTML = show;
}
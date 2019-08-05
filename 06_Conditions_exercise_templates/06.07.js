// 06.07 JavasScript code
function showStudyGrant() {
    var txtAge_element = document.getElementById('txtAge');
    var txtAge = parseInt(txtAge_element.value);
    var txtWithParents_element = document.getElementById('txtWithParents');
    var txtWithParents = txtWithParents_element.value;
    if (txtAge >= 20 && txtWithParents === "n") {
        show = "The study grant is 335,20";
    }
    else if (txtAge >= 20 && txtWithParents === "y") {
        show = "The study grant is 136,70";
    }
    else {
        show = "Ask Kela";
    }
    document.getElementById('divAnswer').innerHTML = show;
}
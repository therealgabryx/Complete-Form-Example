function checkForm() {
    if (document.register.name.value == "") {
        alert("Insert a valid Name");
        return false;
    }

    if (document.register.surname.value == "") {
        alert("Insert a valid Surname");
        return false;
    }  

    if (document.register.gender.value == "") {
        alert("Insert a Gender");
        return false;
    } 

    if (document.register.birthdate.value == "") {
        alert("Insert a Date of Birth");
        return false;
    } 

    if (document.register.region.value == "none") {
        alert("Select your Region");
        return false;
    } 

    if ((document.register.email.value == "") && (document.register.phone.value == "")) {
        alert("Insert Email or Phone Number");
        return false;
    } 

    if ((document.register.baseball.checked == false) && 
        (document.register.tennis.checked == false) && 
        (document.register.football.checked == false) && 
        (document.register.basketball.checked == false) && 
        (document.register.skiing.checked == false) && 
        (document.register.coding.checked == false)) {
        alert("Specify at least one preference");
        return false;
    } 

    alert("Data successfully inserted!");
    return true; 
}
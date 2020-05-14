function checkForm() {
    if (document.registr.cognome.value == "") {
        alert("Insert Surname");
        return false;
    }
    if (document.registr.nome.value == "") {
        alert("Insert Name");
        return false;
    }
    if (document.registr.dataN.value == "") {
        alert("Inserirt date of birth");
        return false;
    }
    var v = parseInt(document.registr.matricola.value);
    if (isNaN(v)) {
        alert("Date not valid");
        return false;
    }
    if (document.registr.regione.value == "nessuna") {
        alert("Select your Region");
        return false;
    }
    if ((document.registr.email.value == "") && (document.registr.tel.value == "")) {
        alert("Insert e-mail or phone number");
        return false;
    }
    alert("Data successfully inserted!");
    return true;


   
}
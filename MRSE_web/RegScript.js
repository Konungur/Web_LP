function validateForm() {
    var name = document.forms["form"]["Name"].value;
    var surname = document.forms["form"]["Surname"].value;
    var username = document.forms["form"]["Username"].value;
    var email = document.forms["form"]["Email"].value;
    var password = document.forms["form"]["Password"].value;
    if (name === "" || name === null) {
        alert("Name must be filled out");
        return false;
    }
    if (surname === "" || surname === null){
        alert("Surname must be filled out");
        return false;
    }
    if (username.length > 16){
        alert("Username cant be longer than 16");
        return false;
    }
    if (password.length < 8){
        alert("Password must be longer than 8");
        return false;
    }
    validateEmail(email);
    }
function validateEmail(mail)
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.forms["form"]["Email"].value)) {
        return (true)
    }
    alert("You have entered an invalid email address!");
    return (false)
}
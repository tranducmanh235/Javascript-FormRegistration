function formValidation(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var password = document.getElementById('password').value;

    if (fname.length < 2 || fname.length > 30) {
        alert('First name must be 2 to 30 characters long');
        return false;
    }
    if (lname.length < 2 || lname.length > 30) {
        alert('Last name must be 2 to 30 characters long');
        return false;
    }
    if (password.length < 2 || password.length > 30) {
        alert('Password must be 2 to 30 characters long');
        return false;
    }

    alert("Registration successful!");
}
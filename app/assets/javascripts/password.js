    function checkPswd() {
        var confirmPassword = "bigfamily";
        var password = document.getElementById("pswd").value;
        if (password == confirmPassword) {
             window.location="/familyProtected";
        }
        else{
            alert("Passwords do not match.");
        }
    }
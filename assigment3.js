        var setemail = false;
        var setpass = false;
    function checkmail(element) {
        var validmail = element.value.lastIndexOf("@");
        var validmail1 = element.value.lastIndexOf(".com");
        if(validmail == -1 && validmail1 == -1) {
            element.style.color = "red";
            element.style.border = "2px solid red";
            alert("Email must contain in @ and .com");
        }
        else {
            element.style.color = "green";
            element.style.border = "2px solid green";
           // alert("Valid Email Address");
            setemail = true;
        }
    }
    function password(pass) {
        if(pass.value.length < 8) {
            pass.style.color = "red";
            pass.style.border = "2px solid red";
           alert("Password must contain more then 8 character");
        }
        else {
            pass.style.color = "green";
            pass.style.border = "2px solid green";
           // alert("Valid Password");
            setpass = true;
        }
    }
   function button() {
       if(setemail == true && setpass == true) {
        alert("Your form has been submited");
     }
     else {
        alert("Please type valid Email and Password");
     }
   }
   
    
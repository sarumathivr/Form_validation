
function validation(){
    var name=document.getElementById("name").value ;
    var mail=document.getElementById("mail").value ;
    var user=document.getElementById("user").value ;
    var pass=document.getElementById("pass").value ;
    var conpass=document.getElementById("conpass").value ;
    var mob=document.getElementById("mob").value ;

    if (name == ""){
        document.getElementById("Name").innerHTML = " ** Please fill the name field" ;
        return false ;
    }
    if (mail == ""){
        document.getElementById("email").innerHTML = " ** Please fill the Email id field" ;
        return false ;
    }
    //The indexOf() method returns the position of the first occurrence of a value in a string. The indexOf() method returns -1 if the value is not found.
    if (mail.indexOf("@") <= 0){
        document.getElementById("email").innerHTML = " ** Invalid Email" ;
        return false ;
    }
    if (mail.charAt(mail.length - 4) != "." && mail.charAt(mail.length - 3) != "."  ){
        document.getElementById("email").innerHTML = " ** Invalid Email" ;
        return false ;
    }
    if (user == ""){
        document.getElementById("username").innerHTML = " ** Please fill the Username field" ;
        return false ;
    }
    if (user.length <=3 || user.length >=20){
        document.getElementById("username").innerHTML = " ** Username length must be between 3 and 20" ;
        return false ;
    }
    //NaN is short for "Not-a-Number"
    if (!isNaN (user)){ 
        document.getElementById("username").innerHTML = " ** Only characters are allowed" ;
        return false ;
    }
    if (pass == ""){
        document.getElementById("password").innerHTML = " ** Please fill the Password field" ;
        return false ;
    }
    if (pass.length <=  5 || pass.length >= 20){
        document.getElementById("password").innerHTML = " ** Password length must be between 5 and 20" ;
        return false ;
    }
    if (pass != conpass){
        document.getElementById("con_password").innerHTML = " ** Password Mismatch" ;
        return false ;
    }
    if (conpass == ""){
        document.getElementById("con_password").innerHTML = " ** Please fill the Confirm Password field" ;
        return false ;
    }
    if (mob == ""){
        document.getElementById("mobile").innerHTML = " ** Please fill the Mobile number field" ;
        return false ;
    }
    if (isNaN (mob)){ 
        document.getElementById("mobile").innerHTML = " ** User must enter only numbers not characters" ;
        return false ;
    }
    if (mob.length!=10){ 
        document.getElementById("mobile").innerHTML = " ** Mobile number must be 10 digits only" ;
        return false ;
    }
    // alert("Your signup page is submitted successfully!!!!");
}
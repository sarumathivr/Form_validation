
function validation(){
    var user=document.getElementById("user").value ;
    var pass=document.getElementById("pass").value ;

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
}
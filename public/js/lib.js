var email = document.getElementById("email");
var pwd = document.getElementById("pwd");
var mob = document.getElementById("mob");

function validate(){
    if(email.value==""){
        alert("Email cannot be empty");
        return false;
    }
    if (pwd.value==""){
        alert("Password cannot be empty");
        return false;
    }
    if(pwd.value.length<=7){
        alert("Password is too short");
        psw.style.border="2px solid red";
    }
    if(mob.value.length < 10){
        alert("Mobile no should contain 10nos");
        mob.style.border="2px solid red";
    
}
}
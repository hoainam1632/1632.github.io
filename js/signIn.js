var passAgain = document.getElementById("pass-again");
var btnSignUp = document.getElementById("btn-signUp");
var btnSignIn = document.getElementById("btn-signIn");
var signIn = document.getElementById("SignIn");
var bgSignIn = document.getElementById("bg-signIn");
function openSignUp(){
    animation();
    passAgain.style.display = "block";
    btnSignUp.style.display = "block";
    btnSignUp.style.marginLeft = "32px";
    btnSignIn.style.display = "none";
}
function openSignIn(){
    animation();
    passAgain.style.display = "none";
    btnSignUp.style.display = "none";
    btnSignIn.style.display = "block";
    btnSignIn.style.marginLeft = "32px";
}
function closeSignIn(){
    bgSignIn.style.display = "none";
    signIn.style.visibility = "hidden";
    signIn.style.top = "-30px";
    signIn.style.opacity = "0";
}
function animation(){
    bgSignIn.style.display = "block";
    signIn.style.visibility = "visible";
    signIn.style.top = "5em";
    signIn.style.opacity = "1";
}

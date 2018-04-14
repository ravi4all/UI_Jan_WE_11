window.addEventListener("load", init);

var username;
var useremail;
var userpwd;
var confpwd;

function init(){
    username = document.getElementById("box_1");
    useremail = document.getElementById("box_2");
    userpwd = document.getElementById("box_3");
    confpwd = document.getElementById("box_4");
    span = document.getElementsByTagName("span");
    username.addEventListener("blur", blankCheck);
    userpwd.addEventListener("keyup", passwordStrength);
}

function blankCheck(){
    str = username.value.trim();
    /*
    if(str == "") {
        span[0].innerHTML = "Cannot leave this field blank";
        // span[0].style.display = 'block';
        span[0].className = 'active';
        username.style.border = "1px solid red";
    }
    else {
        span[0].innerHTML = "";
        username.style.border = "1px solid green";
        span[0].className = '';
    }
    */
    if(isEmpty(str)){
        span[0].innerHTML = "Cannot leave this field blank";
        // span[0].style.display = 'block';
        span[0].className = 'active';
        username.style.border = "1px solid red";
    }
    else {
        span[0].innerHTML = "";
        username.style.border = "1px solid green";
        span[0].className = '';
    }
}

function isEmpty(str) {
    return (str == undefined || str == NaN || str == false || str == 0 || str == "") ? true : false;
}

function passwordStrength(){
    if (userpwd.value.length == 0){ 
        span[2].innerHTML = "Cannot Leave blank";
    }
    else if(userpwd.value.length > 0 && userpwd.value.length <= 4){
        span[2].innerHTML = "Weak Password"
    }
    else if(userpwd.value.length > 4 && userpwd.value.length <= 8){
        span[2].innerHTML = "Average Password"
    }
    else if(userpwd.value.length > 8){
        span[2].innerHTML = 'Strong Password';
    }
    else {
        span[2].innerHTML = "Proceed";
    }
}
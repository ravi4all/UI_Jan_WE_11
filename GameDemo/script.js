window.addEventListener("load", init);

var count = 0;
var moveX = 0;
function init() {
    image = document.getElementById("image");
    var container = document.getElementById("container");
    backgroundImage = document.getElementById("inner_container");
    container.addEventListener("keyup",moveBg);
}

function moveBg(){
    // console.log("Moving Bg");
    key = event.keyCode;
    console.log(key);
    if (key == 39) {
        image.style.transform = 'rotateY(0deg)';
        moveX = -5;
        count += moveX;
        backgroundImage.style.backgroundPosition = count+'% 0px';
        // console.log(backgroundImage);
        changeImage_1();
    }
    else if (key == 37){
        moveX = 5;
        count += moveX;
        backgroundImage.style.backgroundPosition = count+'% 0px';
        image.style.transform = 'rotateY(180deg)';
    }
    else if(key == 32){
        jumpImage();
    }
}

function changeImage_1(){
    image.innerHTML = '<img src="assets/hulk5-18463.gif" alt="">';
}
function jumpImage(){
    image.innerHTML = '<img src="assets/hulksmash2.gif" alt="">';
    setTimeout(function(){
        image.innerHTML = '<img src="assets/hulk5-18463.gif" alt="">';
    }, 2000);
}
// Event Binding

window.addEventListener("load", init);

function init(){

    document.getElementById("btn").addEventListener("click", showName);

    /*
    document.getElementById("btn").addEventListener("click",function(){
        console.log("Function Called...");
        // alert("Function called");
        username = document.getElementById("box_1");
        // document.getElementById("result").innerHTML += username.value;
        document.getElementById("result").innerHTML = username.value;    
    });
    */
}


// document.getElementById("btn").addEventListener("click",showName);

function showName(){
    console.log("Function Called...");
    // alert("Function called");
    username = document.getElementById("box_1");
    // document.getElementById("result").innerHTML += username.value;
    document.getElementById("result").innerHTML = username.value;
}
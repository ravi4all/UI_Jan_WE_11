window.addEventListener("load", init);

var itemName;
var itemPrice;
var itemDesc;

function init(){
    itemName = document.querySelector("#box_1");
    itemPrice = document.querySelector("#box_2");
    itemDesc = document.querySelector("#box_3");

    document.querySelector("#add").addEventListener("click", addItem);

}

function addItem(){
    var ul = document.getElementById("itemList");
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = itemName.value + " " + itemPrice.value + " " + itemDesc.value;
    ul.appendChild(li);
}
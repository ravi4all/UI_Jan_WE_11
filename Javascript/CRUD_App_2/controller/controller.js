window.addEventListener("load", init);

var itemName;
var itemPrice;
var itemDesc;

function init(){
    itemName = document.querySelector("#box_1");
    itemPrice = document.querySelector("#box_2");
    itemDesc = document.querySelector("#box_3");

    document.querySelector("#add").addEventListener("click", addItem);
    document.querySelector("#delete").addEventListener("click",deleteItem);
    document.querySelector("#save").addEventListener("click", saveData);
    document.querySelector("#load").addEventListener("click", loadData);
}

function saveData(){
    if(window.localStorage){
        var json = JSON.stringify(obj.itemList);
        localStorage.setItem('shopData',json);
    }
    else {
        alert("Localstorage not supported...");
    }
}

function loadData(){
    var data = localStorage.getItem('shopData');
    obj.itemList = JSON.parse(data);
    printItem();
}

function addItem(){
    var ul = document.getElementById("itemList");
    var li = document.createElement('li');
    li.className = 'list-group-item';
    var img = document.createElement("img");
    img.setAttribute('src','../images/trash.png');
    img.className = 'delete_img';

    var btn = document.createElement("button");
    btn.innerHTML = "Add to Cart";
    btn.className = 'btn btn-primary btn_1';

    obj.addItem(itemName.value, itemPrice.value, itemDesc.value);

    li.innerHTML = obj.id + " " + itemName.value + " " + itemPrice.value + " " + itemDesc.value;
    li.appendChild(btn);
    li.appendChild(img);
    ul.appendChild(li);

    img.addEventListener("click", markItem);

    printCount()

}

function printCount(){
    tot_count = document.querySelector("#tot_count");
    tot_count.innerHTML = obj.totalProducts();
}

function markItem(){
    event.srcElement.parentElement.classList.toggle("mark");
    var current_id = event.srcElement.parentElement.innerHTML.split(" ")[0];
    obj.toggleItem(current_id);
    selectedCount();
}

function selectedCount(){
    var s_count = document.querySelector("#selected_count");
    s_count.innerHTML = obj.selectedCount();
}

function deleteItem(){
    obj.deleteItem();
    printItem();
    printCount();
    selectedCount();
}

function printItem(){
    var ul = document.getElementById("itemList");
    ul.innerHTML = "";

    obj.itemList.forEach(function(x){
        var li = document.createElement('li');
        li.className = 'list-group-item';
        var img = document.createElement("img");
        img.setAttribute('src','../images/trash.png');
        img.className = 'delete_img';
    
        var btn = document.createElement("button");
        btn.innerHTML = "Add to Cart";
        btn.className = 'btn btn-primary btn_1';
    
        li.innerHTML = x.id + " " + x.name + " " + x.price + " " + x.desc;
        li.appendChild(btn);
        li.appendChild(img);
        ul.appendChild(li);
    
        img.addEventListener("click", markItem);
    })

}
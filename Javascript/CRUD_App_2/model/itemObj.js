var obj = {
    id : 0,
    itemList : [],

    addItem : function(name,price,desc){
        this.id++;
        var newItem = new Item(this.id,name,price,desc);
        this.itemList.push(newItem);
        console.log(this.itemList);
    },

    toggleItem : function(current_id){
        var toggleList = this.itemList.filter(function(x){
            return x.id == current_id;
        });
        console.log(toggleList);
        toggleList[0].selected = !toggleList[0].selected;
    },

    deleteItem : function(){
        this.itemList = this.itemList.filter(function(x){
            return x.selected == false;
        })
        // console.log(this.itemList);
    },

    totalProducts : function(){
        return this.itemList.length;
    },

    selectedCount : function(){
        len = this.itemList.filter(function(x){
            return x.selected == true;
        });
        return len.length;
    }

}
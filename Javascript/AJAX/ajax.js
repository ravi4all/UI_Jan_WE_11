function loadJson(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        // console.log("Ready state is",this.readyState);
        // console.log("Status is",this.status);
        if(this.readyState == 4 && this.status == 200){
            // console.log(this.responseText);
            json = this.responseText;
            dataList = JSON.parse(json);
            console.log(dataList);
            document.getElementById("num").innerHTML = dataList.resultCount;
            var ul = document.getElementById("songList");
            songsList = dataList.results;
            songsList.forEach(function(obj){
                var li = document.createElement('li');
                var link = document.createElement('a');
                link.setAttribute('href',obj.artistViewUrl);
                link.innerHTML = "View Artist";
                li.innerHTML = obj.trackName + " - " +obj.artistName + "<br>";
                li.appendChild(link);
                ul.appendChild(li);
            })
        }
    }
    // xhttp.open('get','http://cricapi.com/b7CYzlyYOrUCIIdbSlU753oGKN12/matches');
    xhttp.open('get','data.json');
    xhttp.send();
}
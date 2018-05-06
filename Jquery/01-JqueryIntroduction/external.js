$(document).ready(function(){
    $("button").click(function(){
        var username = $("input").val();
        $("span").html(username);
    });
});
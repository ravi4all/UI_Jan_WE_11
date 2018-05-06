$(document).ready(initEvents);

function initEvents(){
    $("button").click(function(){
        // $(this).siblings('img').hide();
        // $(this).parent().hide();
        // $(this).parents().hide();
        // $(this).parents(".child_1").hide();
        // $(this).parentsUntil('#parent_1').hide(1000);
        $(this).parents('#parent_1').find('.child_2 img').hide(1000);
    })
}
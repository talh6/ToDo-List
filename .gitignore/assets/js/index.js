//check off specific Todos By Clicking
$('ul').on("click","li",function(){
    $(this).toggleClass("completed");
})

$('ul').on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress",function(){
    if(event.which===13){
        createNewLiAndAddToList();
    }
})

function createNewLiAndAddToList(){
    var todoText = $("input[type='text']").val();
    $('ul').append("<li> <span><i class = 'fa fa-trash'></i></span> "+ todoText +"</li>");
    $(input["type='text'"]).val("");
}

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})
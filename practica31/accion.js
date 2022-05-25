$(function () {
    let osiVisible=true;
    $("#osi").on("change",function (e) {
        if(osiVisible==true)
            $("#modeloOsi").css({
               "display":"none"
            })
    })
});
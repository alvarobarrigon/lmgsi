$(function () {
    $("#inicio").on("click",function () {
        $("#panoramicas").css({
            "background-image":"url(img/panoramica1.jpg)"
        });
        $("#texto").text("Panorámica 1")
    });
    $("#fin").on("click",function () {
        $("#panoramicas").css({
            "background-image":"url(img/panoramica6.jpg)"
        });
        $("#texto").text("Panorámica 6")
    });
});
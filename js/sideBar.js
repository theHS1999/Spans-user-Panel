$(document).on("click" , "#toggle" , function () {
    var width = $(".mySidenav").width();
    if(width == 60){
        $(".mySidenav").removeClass("slim");
        $(".mySidenav").addClass("wide");
        $("#cover").removeClass("off");
        $("#cover").addClass("on");
    }
    else{
        $(".mySidenav").removeClass("wide");
        $(".mySidenav").addClass("slim");
        $("#cover").removeClass("on");
        $("#cover").addClass("off");
    }
});
$(document).on("click" , ".on" , function () {
    $(".mySidenav").removeClass("wide");
    $(".mySidenav").addClass("slim");
    $("#cover").removeClass("on");
    $("#cover").addClass("off");
});
var sideNavScrollbar = document.querySelector('.custom-scrollbar');
var ps = new PerfectScrollbar(sideNavScrollbar);
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
$(window).scroll(function () {
    if($(window).scrollTop() > 50) {
        $("#converter-dropdown").css("top" , "48px");
    }
});

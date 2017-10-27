$(document).ready(function(){

    sizeAdjust();

    $(window).resize(function() {
        sizeAdjust();
    });

});

function sizeAdjust(){
    if ($(window).width() > 800){
        Two_Col();
    } else {
        One_Col();
    }
}

function One_Col(){
    $("#main_info").prependTo("#right");
    $("#about").prependTo("#right");
}

function Two_Col(){
    $("#main_info").appendTo("#left");
    $("#about").appendTo("#right");
}

function Small(){

}

function XSmall(){
    console.log('xs');
}

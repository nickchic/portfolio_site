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
    $(".about").prependTo("#right");
}

function Two_Col(){
    $(".about").appendTo("#right");
}

function Small(){

}

function XSmall(){
    console.log('xs');
}

$.fn.randomBg=function(){

    var imgList=['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg'];

    var x= Math.floor(Math.random()*imgList.length);

    this.css({
        'background':'url("img/'+imgList[x]+'") center top fixed no-repeat',
        'background-size':'cover'
    });
    return this;
}


$(document).ready(function(){

    $('#home').randomBg();

    $('#works').randomBg();

    $(".backTop").tooltip();

    $('.desciption').hide();

    $(".carousel").carousel({
        interval:2000
    });

    $('#navbar').scrollspy();

})




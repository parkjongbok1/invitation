$(document).ready(function(){
    $(".wedding_slider").slick({
        dots: false,
        infinite: true,
        arrows: false,
        prevArrow: $('.p'), //이전 화살표
        nextArrow: $('.n'), //다음 화살표
        autoplay: true,
        autoplaySpeed: 3200,
        speed: 1000,
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수   
        fade: true,
    });
  
});

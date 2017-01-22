$(".responsivebutton").on('click', function() {
    $(".header-menu--ul").toggle(function(){});
    $(".header-menu").addClass("all-body");
});

$(".responsivebtn").on('click', function() {
    $(".header-menu--ul").toggle(function(){});
    $(".header-menu").removeClass("all-body");
    $(".responsivebutton").show();
});

var mySwiper = new Swiper('#funcionalidades', {
    speed: 400,
    spaceBetween: 100,
    centeredSlides: true,
    pagination: '.pagination',
    nextButton: '.navright',
    prevButton: '.navleft'
	});

    
    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 1){  
    //         $('header').addClass("header-fixed");
    //     }
    //     else{
    //         $('header').removeClass("header-fixed");
    //     }
    // });

    if($(document).width() < 767) {
            $('.header-menu ul li').on('click', function() {
            $(".header-menu--ul").toggle(function(){});
            $(".header-menu").removeClass("all-body");
        })
    }

    $(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
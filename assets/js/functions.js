$(".responsivebutton").on('click', function() {
    $(".header-menu--ul").toggle(function(){});
    $(".header-menu").addClass("all-body");
});

$(".responsivebtn").on('click', function() {
    $(".header-menu--ul").toggle(function(){});
    $(".header-menu").removeClass("all-body");
    $(".responsivebutton").show();
});

$(function() {
    $('.comofazemos-feature').matchHeight();
});

var mySwiper = new Swiper('#funcionalidades', {
    speed: 400,
    spaceBetween: 100,
    centeredSlides: true,
    pagination: '.pagination'
	});
    

//     $('.swiper-pagination-switch-2').click(function(){
//         mySwiper.slideTo(1);
//         $(this).addClass('circle-active')
//         $('.swiper-pagination-switch').removeClass('circle-active');
//         $('.swiper-pagination-switch-3').removeClass('circle-active');
//     })

//     $('.swiper-pagination-switch-3').click(function(){
//         mySwiper.slideTo(2);
//         $(this).addClass('circle-active')
//         $('.swiper-pagination-switch-1').removeClass('circle-active');
//         $('.swiper-pagination-switch-2').removeClass('circle-active');
//     })
 


//  var width = $(window).width();
//  if (width < 767) {
//     var swiper2 = new Swiper('#quematendemos', {
//     speed: 400,
//     spaceBetween: 0,
//     centeredSlides: true });

//     $('.header-menu ul li').on('click', function() {
//         $(".header-menu--ul").toggle(function(){});
//         $(".header-menu").removeClass("all-body");
//     })
//  } else {
//      $('#quematendemos').removeClass('swiper-container');
//      $('#quematendemos').removeClass('swiper-container-horizontal');
//      $('#quematendemos .swiper-wrapper').removeClass('swiper-wrapper');
//      $('#quematendemos .swiper-slide').removeClass('swiper-slide');
//  }

//  if (width > 992) {
//      $('.bg-mapa-2, .bg-mapa').matchHeight();
//      $('body section.paplocalizacao .paplocalizacao-title').css('padding-left', $('.positionfeature').offset().left - $('body section.paplocalizacao .paplocalizacao-title'));
//   } 
  
//   if(width > 1360) {
//       $('body section.paplocalizacao .paplocalizacao-title').css('padding-left', $('.positionfeature').offset().left - 50);
//   }

//   var estadosswiper = new Swiper('#estados', {
//     speed: 400,
//     centeredSlides: true,
//     onSlideChangeStart: function (swiper) {       
//             switch(swiper.activeIndex) {
//                 case 0: {
//                     $('.estado-mg').removeClass('active')
//                     $('.estado-pr').removeClass('active');
//                     $('.estado-rj').addClass('active');
//                     $('.estado-sp').removeClass('active');
//                     break;
//                 }

//                 case 1: {
//                     $('.estado-mg').removeClass('active')
//                     $('.estado-pr').removeClass('active');
//                     $('.estado-rj').removeClass('active');
//                     $('.estado-sp').addClass('active');
//                     break;
//                 }

//                 case 2: {
//                     $('.estado-mg').addClass('active')
//                     $('.estado-pr').removeClass('active');
//                     $('.estado-rj').removeClass('active');
//                     $('.estado-sp').removeClass('active');
//                     break;
//                 }

//                 case 3: {
//                     $('.estado-mg').removeClass('active')
//                     $('.estado-pr').addClass('active');
//                     $('.estado-rj').removeClass('active');
//                     $('.estado-sp').removeClass('active');
//                     break;
//                 }
//             }
//         }    
// 	});

//       $('.estado-rj').click(function(){
//         estadosswiper.slideTo(0);
//         $(this).addClass('circle-active')
//         $('.estado-mg').removeClass('active')
//         $('.estado-pr').removeClass('active');
//         $('.estado-sp').removeClass('active');
//     })

//      $('.estado-sp').click(function(){
//         estadosswiper.slideTo(1);
//         $(this).addClass('circle-active')
//         $('.estado-mg').removeClass('active')
//         $('.estado-pr').removeClass('active');
//         $('.estado-rj').removeClass('active');
//     })

//      $('.estado-mg').click(function(){
//         estadosswiper.slideTo(2);
//         $(this).addClass('circle-active')
//         $('.estado-sp').removeClass('active')
//         $('.estado-pr').removeClass('active');
//         $('.estado-rj').removeClass('active');
//     })

//      $('.estado-pr').click(function(){
//         estadosswiper.slideTo(3);
//         $(this).addClass('circle-active')
//         $('.estado-mg').removeClass('active')
//         $('.estado-rj').removeClass('active');
//         $('.estado-sp').removeClass('active');
//     })

// var clientesswiper = new Swiper('#clientes', {
//     speed: 400,
//     pagination: '.clientes-pagination'
// 	});
    
    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 1){  
    //         $('header').addClass("header-fixed");
    //     }
    //     else{
    //         $('header').removeClass("header-fixed");
    //     }
    // });

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
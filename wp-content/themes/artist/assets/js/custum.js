jQuery(document).ready(function($){
	"use strict";
	
	// social hover
	$('ul.hs_footer_menu li a').hover(function(){
		$(this).addClass('animated swing');
		});
	$('ul.hs_footer_menu li a').mouseleave(function(){
		$('ul.hs_footer_menu li a').removeClass('animated swing');
	});	
	
	/********** makes sure the whole site is loaded-************/
	jQuery(window).load(function() {
			// will first fade out the loading animation
		jQuery("#status").fadeOut();
			// will fade out the whole DIV that covers the website.
		jQuery("#preloader").delay(1000).fadeOut("slow");
		// smooth scroll
		
		// scroll animation 
// 		$('.carousel').carousel({
// 		     interval: 3000,
// 		});
	});
	
 
	// BX Slider js
	$('.bxslider').bxSlider({
	  auto: true,
	  pager: false,
	  speed: 500,
	});

	$('.bxslider_partner').bxSlider({
	  auto: true,
	  autoControls: false,
	  maxSlides: 4,
	  slideWidth: 320,
	  slideMargin: 0,
	  moveSlides: 1,
	  pager: false,
	  responsive: true,
	  minSlides: 1
	}); 
 
	/*************Portfolio- shorting******************/
	jQuery(function () {
		var filterList = { 
		    hoverEffect: function () {
				// Simple parallax effect
				jQuery('#portfoliolist .portfolio').hover(
					function () {
						jQuery(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
						jQuery(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');				
					},
					function () {
						jQuery(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
						jQuery(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');								
					}		
				);				
			} 
		};  
		
	});	 
	
	
	/*************Portfolio- shorting -End******************/
	/*************--Facybox--****/
	//fancybox
	$(".fancybox").fancybox({
        openEffect	: 'elastic',
		closeEffect	: 'elastic',
		helpers : 
		{
			overlay: 
			{ 
				locked: false 
			} 
		}
    });
	
	/*************** Contact-form *****************/
	$.validate({
		form : '#artist_contactform',
		modules : 'security',
		onSuccess : function() {
		contactform();
		return false; // Will stop the submission of the form
		}
	});
	
	function contactform(){
		$('.artist_loading_images').css('display','block');
		var formdata = $( "#artist_contactform" ).serialize();
		formdata += '&action=artist_sndadminmail';
		$.ajax({
			type : "post",
			url : $('#artist_ajaxurl').val(),
			data : formdata, 
			success: function(response) {
				$('.artist_loading_images').css('display','none');
				$('.artist_infotext').text(response);
				$('#Message').val('');
			}
		});
	}
   
	/*************Portfolio- shorting******************/
    if ($('ul.hs_main_menu_bar.hs_pf_fliter > li > a').length > 0) {
		    $("ul.hs_main_menu_bar.hs_pf_fliter > li > a").on("click", function(e) {
                    e.preventDefault(); 
            });
            $('#portfoliolist').mixItUp();

            }
 /*************Portfolio- shorting -End******************/
  /***woocommerece single*/
   $('.gallery-image-url').on('click',function(){
	  var image_url = $(this).find('.attachment-shop_single').attr('src');
	  $("#image_target").attr("src", image_url); 
   });  
	/*************** Contact-form *****************/
});//End document ready
/*--------------------- Copyright (c) 2022 -----------------------
[Master Javascript]
-------------------------------------------------------------------*/
(function ($) {
  "use strict";
  var artist = {
    initialised: false,
    version: 1.0,
    mobile: false,
    init: function () {
      if (!this.initialised) {
        this.initialised = true;
      } else {
        return;
      }
      /*-------------- Design Functions Calling ---------------------------------------------------
      ------------------------------------------------------------------------------------------------*/
   
      this.fixHeader();
      this.atServiceSlider();
      this.testimonialSlider();
      this.blogSlider();
      this.productSlider();
      this.productSlider1();
      this.productSlider2();

     
    },

    /*-------------- Design Functions Calling ---------------------------------------------------
    --------------------------------------------------------------------------------------------------*/

  
    
   

    fixHeader:function(){
      $(".at-menu-border").click(function(){
    
        $("body").addClass("toogleon");
     
      });
      $(".at-header-close").click(function(){
     
     $("body").removeClass("toogleon");
  
   });
    },

    atServiceSlider: function () {
      var swiper = new Swiper(".swiper.atservice-slider", {
        slidesPerView: 4,
        spaceBetween: 100,
       cssMode: true,
       slidesPerGroup: 1,
       speed:3000,
//       loop:true,
// 		direction: 'horizontal',
//       autoplay: 
//         {
//           delay: 3000,
//         },
       navigation: {
         nextEl: ".swiper-button-next.at-service-next",
         prevEl: ".swiper-button-prev.at-service-prev",
       },
        breakpoints:{
            1200:{
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1199:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
            992:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
            767:{
                slidesPerView:2,
                spaceBetween: 30,
            },
             580:{
                slidesPerView:1,
                spaceBetween: 30,
            },
            480:{
                slidesPerView:1,
                spaceBetween: 30,
            },
           380:{
                slidesPerView:1,
                spaceBetween: 30,
            },
            320:{
                slidesPerView:1,
                spaceBetween: 30,
            },
        }
     });
    },
    // testimonial slider
    testimonialSlider: function () {
      var swiper = new Swiper(".mySwipertestimonial", {
           speed:1000,
            loop:true,
		direction: 'horizontal',
		 autoplay: 
        {
          delay: 3000,
        },
        navigation: {
          nextEl: ".swiper-button-next.swiper-button-next_testimonial",
          prevEl: ".swiper-button-prev.swiper-button-prev_testimonial",
        },
      });
      },
    // blog slider
    blogSlider: function () {
      var swiper = new Swiper(".atBlog-slider", {
        slidesPerView: 4,
        spaceBetween: 30,
         speed:1000,
		direction: 'horizontal',
		 autoplay: 
        {
          delay: 3000,
        },
       navigation: {
         nextEl: ".at-blog-next.swiper-button-next",
         prevEl: ".at-blog-prev.swiper-button-prev",
       },
          breakpoints:{
            1200:{
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1199:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
            992:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
            767:{
                slidesPerView:2,
                spaceBetween: 30,
            },
             580:{
                slidesPerView:1,
                spaceBetween: 30,
            },
            480:{
                slidesPerView:1,
                spaceBetween: 30,
            },
            380:{
                slidesPerView:1,
                spaceBetween: 30,
            },
            320:{
                slidesPerView:1,
                spaceBetween: 30,
            },
        }
     });
    },
    // product slider
    productSlider: function () {
      var swiper = new Swiper(".atProcuct-slider", {
        slidesPerView: 3,
        spaceBetween: 100,
         speed:1000,
		direction: 'horizontal',
        autoplay: 
        {
          delay: 3000,
        },
        loop: true,
       breakpoints:{
            1200:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1199:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
            992:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
            767:{
                slidesPerView:2,
                spaceBetween: 30,
            },
             580:{
                slidesPerView:2,
                spaceBetween: 30,
            },
            480:{
                slidesPerView:1,
                spaceBetween: 30,
            },
            380:{
                slidesPerView:1,
                spaceBetween: 30,
            },
            320:{
                slidesPerView:1,
                spaceBetween: 30,
            },
        }
       
     });
    },
    // product slider1
    productSlider1: function () {
      var swiper = new Swiper(".atProcuct-slider1", {
        slidesPerView: 3,
        spaceBetween: 100,
        // freeMode: true,
         speed:500,
		direction: 'horizontal',
        autoplay: 
        {
          delay: 3000,
        },
        loop: true,
        breakpoints:{
            1200:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1199:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
            992:{
                slidesPerView: 2,
                spaceBetween: 30,
            },
            767:{
                slidesPerView:2,
                spaceBetween: 30,
            },
             580:{
                slidesPerView:2,
                spaceBetween: 30,
            },
            480:{
                slidesPerView:2,
                spaceBetween: 30,
            },
            380:{
                slidesPerView:2,
                spaceBetween: 30,
            },
            320:{
                slidesPerView:1,
                spaceBetween: 30,
            },
        }
     });
    },
    // product slider 2
    productSlider2: function () {
      var swiper = new Swiper(".atProcuct-slider2", {
        slidesPerView: 6,
        spaceBetween: 100,
        // freeMode: true,
         speed:1000,
		direction: 'horizontal',
        autoplay: 
        {
           delay: 3000,
        },
        loop: true,
        breakpoints:{
            1200:{
                slidesPerView: 6,
                spaceBetween: 30,
            },
            1199:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
            992:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
            767:{
                slidesPerView:2,
                spaceBetween: 30,
            },
             580:{
                slidesPerView:2,
                spaceBetween: 30,
            },
            480:{
                slidesPerView:1,
                spaceBetween: 30,
            },
            380:{
                slidesPerView:1,
                spaceBetween: 30,
            },
            320:{
                slidesPerView:1,
                spaceBetween: 30,
            },
        }
     });
    },
    // footer slider
  
















    
  };
  artist.init();

}(jQuery));








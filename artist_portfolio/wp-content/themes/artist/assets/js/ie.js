jQuery(document).ready(function ($) {
    var browser = hs_get_browser();
    if (browser == "Microsoft Internet Explorer") {
        $(".hs_port_thumb").addClass("hs_port_thumb1");
        $(".hs_latest").addClass("hs_latest1");
        $(".hs_blog_thumb").addClass("hs_blog_thumb1");
        $(".hs_bloging").addClass("hs_bloging1");
        $(".hs_big_thumb").addClass("hs_big_thumb1");
        $(".hs_page_big_thumb").addClass("hs_page_big_thumb1");
        $(".hs_blog_slide").addClass("hs_blog_slide1");
        $(".hs_single_thumb").addClass("hs_single_thumb1");
        $(".hs_main_slider ").addClass("hs_main_slider1");
        $(".hs_slider_mask").addClass("hs_slider_mask1")
    }
});

function hs_get_browser() {
    return navigator.appName
};
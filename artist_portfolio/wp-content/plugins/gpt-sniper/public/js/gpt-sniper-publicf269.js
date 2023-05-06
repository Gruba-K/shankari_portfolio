jQuery(document).ready(function($) {
    'use strict';
    /**
     * Gpt Sniper Chat Mode
     */
    $('.gpt-typing-balls').hide();
    $(document).on('click', '#gpt_chat_option_send', function(e) {
        e.preventDefault(); 
        let chat_get_value = $('#gpt_chat_option_input').val();
        if (chat_get_value == '') {
            toastr.error('Please Type Here!');
            return false;
        } else {         
            $('.gpt-typing-balls').show();
            var formdata = 'chat_get_value=' + chat_get_value;
            formdata += '&action=gptsniper_chatbot_option_ajax';
            $.ajax({
                url: gptsniper_ajax_path.url,
                type: 'POST',
                data: formdata,
                success: function(response) {
                    $('#gpt_chat_option_input').val('');
                    let res_data = JSON.parse(response);

                    $('.gpt-typing-balls').hide();
                    if (res_data.status == 200) {
                        let output = '<div class="gpt_chat_output gpt_chat_msg"><span><small>AI</small>' + res_data.content_data + '</span></div>';
                        let input = '<div class="gpt_chat_input gpt_chat_msg"><span><small>You</small>' + chat_get_value + '</span></div>';
                        let response = input + output;
                        $('.gpt-chatbox-messages').before(response);

                    } else {
                        if(res_data.status==429){
                        }else{
                           toastr.error(res_data.message);
                           $('.gpt_response_massage').html('<span style="color:green;">'+res_data.message+'</span>');
                        }
                    }
                    $(".gpt-preloader").delay(800).fadeOut("slow");
                    $(".gpt-preloader").delay(500).fadeOut("slow");
                }
            });
        }
    });
    /**
     *Gpt Sniper Enter Button Event
     */
    $(document).on('keypress', '#gpt_chat_option_input', function(e) {
        var key = e.which;
        if (key == 13) {
            let chat_get_value = $('#gpt_chat_option_input').val();
            if (chat_get_value == '') {
                toastr.error('Please Type Here!');
                return false;
            } else {
                $('.gpt-typing-balls').show();
                var formdata = 'chat_get_value=' + chat_get_value;
                formdata += '&action=gptsniper_chatbot_option_ajax';
                $.ajax({
                    url: gptsniper_ajax_path.url,
                    type: 'POST',
                    data: formdata,
                    success: function(response) {
                        $('#gpt_chat_option_input').val('');
                        let res_data = JSON.parse(response);
                        $('.gpt-typing-balls').hide();
                        if (res_data.status == 200) {
                            let output = '<div class="gpt_chat_output gpt_chat_msg"><span><small>AI</small>' + res_data.content_data + '</span></div>';
                            let input = '<div class="gpt_chat_input gpt_chat_msg"><span><small>You</small>' + chat_get_value + '</span></div>';
                            let response = input + output;
                            $('.gpt-chatbox-messages').before(response);

                        } else {
                            if(res_data.status==429){
                            }else{
                               toastr.error(res_data.message);
                               $('.gpt_response_massage').html('<span style="color:green;">'+res_data.message+'</span>');
                            }
                        }
                        $(".gpt-preloader").delay(800).fadeOut("slow");
                        $(".gpt-preloader").delay(500).fadeOut("slow");
                    }
                });
            }
        }
    });



    /**
     * Gpt Sniper Quetion & Answers 
     */
    $(document).on('click', '#gpt_quetion_answers_generate', function(e) {
        e.preventDefault();
        let quetion_description = $('#gpt_quetion_text').val();
        if (quetion_description == '') {
            toastr.error('Please Enter Search KeyWords');
            return false;
        } else {
            $('#gpt-faqss').css('display', 'flex');
            var formdata = 'quetion_description=' + quetion_description;
            formdata += '&action=gptsniper_quetion_anwsers';
            $.ajax({
                url: gptsniper_ajax_path.url,
                type: 'POST',
                data: formdata,
                success: function(response) {
                    let res_data = JSON.parse(response);
                    if (res_data.status == 200) {
                        $('#gpt_quetion_text').val("");
                        toastr.success(res_data.message);
                        var quetion = "<p class='gpt-quetion'>Q. " + quetion_description + "</p>";
                        var answers = "<p class='gpt-anwsers'><span>A.</span> " + res_data.content_data + "</p>";
                        var quandans = "<div class='gpt-faq'>" + quetion + answers + "</div>";
                        $('#gpt_questions_and_answers').before(quandans);
                    } else {
                        toastr.error(res_data.message);
                        $('.gpt_response_massage').html('<span style="color:green;">' + res_data.message + '</span>');
                    }
                    $("#gpt-faqss").delay(800).fadeOut("slow");
                    $("#gpt-faqss").delay(500).fadeOut("slow");
                }
            });
        }
    });
    $(document).on('keypress', '#gpt_quetion_text', function(e) {
        var key = e.which;
        if (key == 13) {
            let quetion_description = $('#gpt_quetion_text').val();
            if (quetion_description == '') {
                toastr.error('Please Enter Search KeyWords');
                return false;
            } else {
                $('.gpt-preloader').css('display', 'flex');
                var formdata = 'quetion_description=' + quetion_description;
                formdata += '&action=gptsniper_quetion_anwsers';
                $.ajax({
                    url: gptsniper_ajax_path.url,
                    type: 'POST',
                    data: formdata,
                    success: function(response) {
                        let res_data = JSON.parse(response);
                        if (res_data.status == 200) {
                            $('#gpt_quetion_text').val("");
                            toastr.success(res_data.message);
                            var quetion = "<p class='gpt-quetion'>Q. " + quetion_description + "</p>";
                            var answers = "<p class='gpt-anwsers'><span>A.</span> " + res_data.content_data + "</p>";
                            var quandans = "<div class='gpt-faq'>" + quetion + answers + "</div>";
                            $('#gpt_questions_and_answers').before(quandans);
                        } else {

                            if(res_data.status==429){
                            }else{
                               toastr.error(res_data.message);
                               $('.gpt_response_massage').html('<span style="color:green;">'+res_data.message+'</span>');
                            }

                        }
                        $(".gpt-preloader").delay(800).fadeOut("slow");
                        $(".gpt-preloader").delay(500).fadeOut("slow");
                    }
                });
            }
        }
    });
    /** 
     * Gpt Sniper Content Writer
     */
    $('.gpt-content-writer').hide();
    $(document).on('click', '#gpt_sniper_content_writer', function(e) {
        e.preventDefault();
        
        let title = $('#gpt_post_title').val();
        let post_id = $('#gpt_post_id').val();
        let add_image = $('#gpt_add_image').is(':checked');
        let feature_image = $('#gpt_feature_image').is(':checked');
        let feature_image_size = $('#bpt_openai_image_size').val();
        let openai_language = $('#gpt_openai_language').val();
        let number_of_paragraphs = $('#gpt_contain_para_number').val(); 
        if (title == '') {
            toastr.error('Please Enter Search Text');
            return false;
        } else {
            $('#gpt-contenttt').css('display', 'flex');
            var formdata = 'title=' + title + '&post_id=' + post_id + '&add_image=' + add_image + '&feature_image=' + feature_image + '&feature_image_size=' + feature_image_size + '&openai_language='+openai_language+'&number_of_paragraphs='+number_of_paragraphs;
            formdata += '&action=gptsniper_content_generator';
            $.ajax({
                url: gptsniper_ajax_path.url,
                type: 'POST',
                data: formdata,
                success: function(response) {
                    let res_data = JSON.parse(response);
                    $("#gpt-contenttt").delay(800).fadeOut("slow");
                    $("#gpt-contenttt").delay(500).fadeOut("slow");
                    if (res_data.status == 200) {
                        $('.gpt-content-writer').show();
                        toastr.success(res_data.message);
                        $('#gpt_post_content').html(res_data.content_data);
                        $('.gpt_response_massage').html('<span style="color:green;">' + res_data.message + '</span>');
                    } else {
                        if(res_data.status==429){
                        }else{
                           toastr.error(res_data.message);
                           $('.gpt_response_massage').html('<span style="color:red;">'+res_data.message+'</span>');
                        }
                    }
                }
            });
        }
        
    });

    /**
     * Gpt Sniper Images Generator 
     */
    $(document).on('click', '#gpt_image_generate', function(e) {
        e.preventDefault();
        $('#gpt-imagess').css('display', 'flex');
        var data_keys = $('#gpt_image_uset_input_text').val();
        var image_artist = $('#gpt_image_artist').val();
        var image_style = $('#gpt_image_style').val();
        var image_photography = $('#gpt_image_photography').val();
        var image_lighting = $('#gpt_image_lighting').val();
        var image_subject = $('#gpt_image_subject').val();
        var image_Camera = $('#gpt_image_Camera').val();
        var image_composition = $('#gpt_image_composition').val();
        var images_resolution = $('#gpt_images_resolution').val();
        var image_color = $('#gpt_image_color').val();
        var image_effects = $('#gpt_image_effects').val();
        var image_size = $('#gpt_image_size').val();
        var image_number_of = $('#gpt_image_number_of').val();

        var formdata = 'data_keys=' + data_keys + '&image_artist=' + image_artist + '&image_style=' + image_style + '&image_photography=' + image_photography + '&image_lighting=' + image_lighting + '&image_subject=' + image_subject + '&image_Camera=' + image_Camera + '&image_composition=' + image_composition + '&images_resolution=' + images_resolution + '&image_color=' + image_color + '&image_effects=' + image_effects + '&image_size=' + image_size + '&image_number_of=' + image_number_of;
        formdata += '&action=gptsniper_openai_img_generator';
        $.ajax({
            url: gptsniper_ajax_path.url,
            type: 'POST',
            data: formdata,
            success: function(response) {
                $("#gpt-imagess").delay(800).fadeOut("slow");
                $("#gpt-imagess").delay(500).fadeOut("slow");
                $('.gpt-image-results').html(response);
            }
        });
    });
    
    /**
     * Download Image File
     */
    $(document).on('click',".gpt_download_image",function (e) {
        e.preventDefault();
        let name = 'openapi';
        let image_url = $(this).attr('data-url');
        var link = document.createElement("a");
        link.setAttribute('download', name);
        link.href = image_url;
        document.body.appendChild(link);
        link.click();
        link.remove();
    }); 

    /** Chat Boat Position Toggle **/
    $(".gpt-chatbot-wrap.gpt-chat-has-position .gpt-card").slideUp("fast");
    $(".gpt-chatbot-wrap.gpt-chat-has-position").addClass("gpt-chatbox-hide");
    $(document).on('click', '.gpt-chatbot-icon', function() {
        $(".gpt-chatbot-wrap.gpt-chat-has-position .gpt-card").slideDown("fast");
        $(".gpt-chatbot-wrap.gpt-chat-has-position").removeClass("gpt-chatbox-hide");

    });
    $(document).on('click', '.gpt-chatbot-close', function() {
        $(".gpt-chatbot-wrap.gpt-chat-has-position .gpt-card").slideUp("fast");
        $(".gpt-chatbot-wrap.gpt-chat-has-position").addClass("gpt-chatbox-hide");
    });
})
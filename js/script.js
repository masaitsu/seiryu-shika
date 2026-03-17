$(function () {
    var facebookWrap = $('.fb_service_container .facebook_wrapper');
    var facebookWrap2 = $('.clinic_schedule_fb_container .facebook_wrapper');
    var fbBeforeWidth = '';
    var fbWidth = Math.floor(facebookWrap.width());
    var fbWidth2 = Math.floor(facebookWrap2.width());
    var fbTimer = false;

    function pagePluginCode(w) {
        if (w < 400) {
            var h = 400;
        } else {
            var h = 600;
        }
        return '<iframe src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fopitimalhealthandwellness%2F&tabs=timeline%2C%20events%2C%20messages&width=' + w + '&height=' + h + '&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId" width = "' + w + '" height = "' + h + '" style = "border:none;overflow:hidden" scrolling = "no" frameborder = "0" allowfullscreen = "true" allow = "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>';
    }

    function pagePluginCode2(w) {
        if (w < 400) {
            var h = 400;
        } else {
            var h = 600;
        }
        return '<iframe src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fobihiroseiryudc%2F&tabs=timeline&width=' + w + '&height=' + h + '&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId" width = "' + w + '" height = "' + h + '" style = "border:none;overflow:hidden" scrolling = "no" frameborder = "0" allowfullscreen = "true" allow = "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>';
    }

    $('.hero .slide_items').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        fade: true,
        speed: 1000,
        pauseOnHover: false,
    });

    function slickSwitch() {
        if ($(window).width() < 1025) {
            $('.clinic_slide_items').slick({
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,
                arrows: false,
                centerMode: true,
                centerPadding: "15%",
            });
        } else {
            $('.clinic_slide_items').slick('unslick');
        }
    }

    $(window).on('load resize', function () {
        if (fbTimer !== false) {
            clearTimeout(fbTimer);
        }
        fbTimer = setTimeout(function () {
            fbWidth = Math.floor(facebookWrap.width());
            fbWidth2 = Math.floor(facebookWrap2.width());
            if (fbWidth != fbBeforeWidth) {
                facebookWrap.html(pagePluginCode(fbWidth));
                facebookWrap2.html(pagePluginCode2(fbWidth2));
                window.FB.XFBML.parse();
                fbBeforeWidth = fbWidth;
            }
        }, 200);

        slickSwitch();
    });
});
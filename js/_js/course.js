//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend ui.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend jquery.fancybox.min.js

$(document).ready(function () {
    /* Якорь */
    $(function () {
        $("a[href='#prices'], a[href='#videos']").click(function (h) {
            h.preventDefault();
            var f = $(this).attr("href"),
                g = $(f).offset().top;
            $("body,html").animate({
                scrollTop: g
            }, 1500)
        });
    });
    /*План курса*/
    $("#course-plan, #module-1, #module-2").tabs({
        hide: {
            effect: "clip",
            duration: 200
        },
        show: {
            effect: "clip",
            duration: 200
        }
    });
    $(function () {
        $(".revs-video-wrapper img").click(function () {
            var a = $(this).parent().attr("data-youtube");
            $(this).parent().html('<iframe  src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>');
        });
    });

    $(function () {
        $('#video-revs').on('slide.bs.carousel', function () {
            $('.revs-video-wrapper').each(function () {
                var l = $(this).attr('data-img');
                $(this).html('<img class="video_rev_img" src="' + l + '" alt="Видео отзыв">');
            });
            $(".revs-video-wrapper img").click(function () {
                var a = $(this).parent().attr("data-youtube");
                $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>');
            });
        });
    });
    /*Конец документа */
});
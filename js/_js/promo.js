//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js

var isIE = false || !!document.documentMode;

if (isIE) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/ie.promo.min.css";
    head.appendChild(link);
}

$(document).ready(function () {
    /* Работа формы */
    var check = $('.check'),
        phone = $('.form-mail'),
        message = $('.alert-message'),
        button = $('.button-form');

    $(function () {
        $("form").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert-message', this),
                reNone = /.+/,
                reEm = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{1,20}$/,
                reN = /^[\+]*[0-9]+$/,
                phone = $('.mail', this);
            if (!phone.val().match(reNone)) {
                phone.css('borderColor', 'red');
                message.text('Введите телефон').slideDown(500);
                return false;
            } else if (!check.prop("checked")) {
                check.next().css("color", "red");
                check.next().children().css("color", "red");
                message.text('Подтвердите соглашение').slideDown(500);
                return false;
            } else if (!phone.val().match(reN)) {
                message.text('Только цифры!').slideDown(500);
                phone.val('');
                return false
            } else {
                button.text('Отправляем...');
                setTimeout(function () {
                    button.text('Отправлено!');
                }, 500);
            }
        });
        phone.click(function () {
            message.slideUp(500);
            phone.css('borderColor', '#eee');
        });
        check.click(function () {
            check.next().css("color", "#aaa");
            check.next().children().css("color", "#aaa");
            message.slideUp(500);
        });
    });
    /*Конец документа*/
});
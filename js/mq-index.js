$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 5000,
        pagination: '.pagination',
        loop: true,
        grabCursor: true,
        paginationClickable: true
    });
    var bot = $(".bottom-item");
    var mask = $(".mask-view");
    for (var k = 0; k < bot.length; k++) {
        bot[k].onmouseenter = (function (k) {
            return function () {
                $(mask[k]).slideDown(100, function () { });
            }
        })(k)
        bot[k].onmouseleave = (function (k) {
            return function () {
                $(mask[k]).slideUp(100, function () { });
            };
        })(k)
    };

})
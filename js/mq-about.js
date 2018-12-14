$(function () {
  window.onresize = function () {
    var iWinth = window.innerWidth || document.documentElement.clientWidth;
    if (iWinth < 1310) {
      $(".header-introduction").css('left', '0px', "width", "900px");
    } else {
      $(".header-introduction").css('left', '68px', "width", "1225px");
    }
  }
})
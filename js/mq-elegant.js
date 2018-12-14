$(function () {
  $(".sub-left li").eq(0).css("color", "#1191ef");
  $(".sub-left li").click(function () {
    $(".sub-left li").css("color", "#313131");
    $(this).css("color", "#1191ef");
    if ($(this).attr("data-id") == "all") {
        $(".r-line-o").css("display", "none");
        $(".content-right").children().css("display", "block");
    } else {
      var ele = $(this).attr("data-id");
      for (var i = 0; i < $(".content-right")[0].children.length; i++) {
        if ($(".content-right")[0].children[i].className == ele) {
          $(".r-line-o").css("display", "block");
          $($(".content-right")[0].children[i]).css("display", "block");
        } else {
          $($(".content-right")[0].children[i]).css("display", "none");
        }
      }
    }
  });
  function url(url) {
    $.getJSON(url, function (json) {
      layer.photos({
        photos: json
        , anim: 5
      });
    });
  };
  $(".content-right img").click(function (event) {
    console.log(event.target.src);
    switch (event.target.src.split("/")[event.target.src.split("/").length - 1]) {
      case '1.jpg':
        url('./data/1.json');
        break;
      case '2.jpg':
        url('./data/2.json');
        break;
      case '3.jpg':
        url('./data/3.json');
        break;
      case '4.jpg':
        url('./data/4.json');
        break;
      case '5.jpg':
        url('./data/5.json');
        break;
      case '6.jpg':
        url('./data/6.json');
        break;
      case '7.jpg':
        url('./data/7.json');
        break;
      case '8.jpg':
        url('./data/8.json');
        break;
    }
  });
  $(".r-btn").click(function () {
    switch ($(this).attr("data-id")) {
      case '1':
        url('./data/1.json');
        break;
      case '2':
        url('./data/2.json');
        break;
      case '3':
        url('./data/3.json');
        break;
      case '4':
        url('./data/4.json');
        break;
      case '5':
        url('./data/5.json');
        break;
      case '6':
        url('./data/6.json');
        break;
      case '7':
        url('./data/7.json');
        break;
      case '8':
        url('./data/8.json');
        break;
    }
  })
})
$(function () {
  $(".sub-left li").eq(0).css("color", "#1191ef");
  $(".sub-left li").click(function () {
    $(".sub-left li").css("color", "#313131");
    $(this).css("color", "#1191ef");
    if ($(this).attr("data-id") == "all") {
      $(".r-line-o").css("display", "none");
      $(".content-right").children().css("display", "block");
    } else {
      var ele = $(this).attr("data-id");
      for (var i = 0; i < $(".content-right")[0].children.length; i++) {
        if ($(".content-right")[0].children[i].className == ele) {
          $(".r-line-o").css("display", "block");
          $($(".content-right")[0].children[i]).css("display", "block");
        } else {
          $($(".content-right")[0].children[i]).css("display", "none");
        }
      }
    }
  })
  function url(url) {
    $.getJSON(url, function (json) {
      layer.photos({
        photos: json
        , anim: 5
      });
    });
  };
  $(".content-right img").click(function (event) {
    switch (event.target.src.split("/")[event.target.src.split("/").length - 1]) {
      case '1.jpg':
        url('../data/1.json');
        break;
      case '2.jpg':
        url('../data/2.json');
        break;
      case '3.jpg':
        url('../data/3.json');
        break;
      case '4.jpg':
        url('../data/4.json');
        break;
      case '5.jpg':
        url('../data/5.json');
        break;
      case '6.jpg':
        url('../data/6.json');
        break;
      case '7.jpg':
        url('../data/7.json');
        break;
      case '8.jpg':
        url('../data/8.json');
        break;
    }
  });
  $(".r-btn").click(function () {
    switch ($(this).attr("data-id")) {
      case '1':
        url('../data/1.json');
        break;
      case '2':
        url('../data/2.json');
        break;
      case '3':
        url('../data/3.json');
        break;
      case '4':
        url('../data/4.json');
        break;
      case '5':
        url('../data/5.json');
        break;
      case '6':
        url('../data/6.json');
        break;
      case '7':
        url('../data/7.json');
        break;
      case '8':
        url('../data/8.json');
        break;
    }
  })
})

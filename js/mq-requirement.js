$(function () {
  var docText = $(".content-text")[0];
  var join = ['Web后端开发工程师', '游戏服务器开发工程师', '游戏客户端开发工程师', '文案策划', '系统策划',
    '3D场景地编', '3D游戏动作师', '项目主美', '高级（资深）3D场景次世代美术模型师', '高级（资深）3D次世代美术模型师',
    '资深3D游戏特效师', '高级（资深）UI界面设计师', '游戏测试工程师',];
  var joinID = ['hdgcs', 'yxfwqkfgcs', 'yxkhdkfgcs', 'wach', 'xtch', '3Dcjdb', '3Dyxdzs', 'xmzm', 'zs3Dcjcsdmsmxs', 'zs3Dcsdmsmxs', 'zs3Dyxtxs', 'zsUI', 'yxcsgcs'];
  var joinClass = ['program', 'program', 'program', 'planning', 'planning', 'art', 'art', 'art', 'art', 'art', 'art', 'art', 'test'];
  var doc = document.createElement('ul');
  doc.className = 'u-list';
  for (let i = 0; i < join.length; i++) {
    var list = document.createElement('li');
    var subList = document.createElement('div');
    subList.className = 'sub-list';
    $(list).attr('data-id', joinID[i]);
    $(list).attr('data-class', joinClass[i]);
    $(list).attr('data-sign', 'false');
    var text = document.createTextNode(join[i]);
    list.appendChild(text);
    list.appendChild(subList);
    doc.appendChild(list);
  }
  docText.appendChild(doc);
  $(".view-menu div").eq(0).css('color', '#1290ef');
  $('.view-menu div').click(function () {
    $(".view-menu div").css('color', '#313131');
    $(this).css('color', '#1290ef');
    if ($(this).attr('data-id') === 'welfare') {
      $(".u-list").hide();
      $(".company").show();
    } else {
      $(".u-list").show();
      $(".company").hide();
    }
    if ($(this).attr('data-id') === 'all') {
      $(".content-text ul li").css('display', 'block');
    } else {
      $(".content-text ul li").css('display', 'none');
      for (let i = 0; i < join.length; i++) {
        if ($(this).attr('data-id') === $(".content-text ul li").eq(i).attr('data-class')) {
          $(".content-text ul li").eq(i).css('display', 'block');
        }
      }
    }
  });

  $(".content-text ul li").click(function () {
    if ($(this).attr('data-sign') === 'false') {
      if ($($(this)[0].children[0]).html() === '') {
        var url = './position/' + $(this).attr('data-id') + '.html';
        var weakSelf = this;
        $.ajax({
          url: url,
          method: 'get',
          success: function (response) {
            $(weakSelf.children[0]).html(response);
            $(weakSelf.children[0]).slideDown(200);
          }
        });
      } else {
        $($(this)[0].children[0]).slideDown(200);
      }
      $(this).attr('data-sign', 'true');
    } else {
      $($(this)[0].children[0]).slideUp(200);
      $(this).attr('data-sign', 'false');
    }
  });
});

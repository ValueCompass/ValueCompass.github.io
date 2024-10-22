$(document).ready(function() {
  'use strict';

  var headerOverlay = $(".header__overlay"),
    menuOpenIcon = $(".nav__icon-menu"),
    menuCloseIcon = $(".nav-icon__close"),
    menuList = $(".main-nav"),
    searchOpenIcon = $(".nav__icon-search"),
    searchCloseIcon = $(".search__close"),
    searchBox = $(".search");

  /* =======================
  // Menu and Search
  ======================= */
  menuOpenIcon.click(function() {
    menuOpen();
  })

  menuCloseIcon.click(function () {
    menuClose();
  })

  searchOpenIcon.click(function () {
    searchOpen();
  });

  searchCloseIcon.click(function () {
    // searchClose();
    $("#js-search-input").val("")
    $("#js-results-container").html("")
    searchCloseIcon.hide()
  });

  $("#js-search-input").bind("input propertychange",function(event){
    console.log($("#js-search-input").val())
    if($("#js-search-input").val().length == 0){
      searchCloseIcon.hide()
    }else{
      searchCloseIcon.show()
    }
  });

  $(".resource-right-btn").click(function(){
    if($(".resource-right-btn").hasClass("is-open-btn")){
      $(".resource-right-btn").removeClass("is-open-btn");
      $(".sidebar").removeClass("is-open")
    }else{
      $(".resource-right-btn").addClass("is-open-btn");
      $(".sidebar").addClass("is-open")
    }
  })

  headerOverlay.click(function () {
    menuClose();
    searchClose();
  });

  function menuOpen() {
    menuList.addClass("is-open");
    headerOverlay.addClass("is-visible");
  }

  function menuClose() {
    menuList.removeClass("is-open");
    headerOverlay.removeClass("is-visible");
  }

  function searchOpen() {
    searchBox.addClass("is-visible");
  }

  function searchClose() {
    searchBox.removeClass("is-visible");
  }

  /* =======================
  // Responsive Videos
  ======================= */
  $(".post__content, .page__content").fitVids({
    customSelector: ['iframe[src*="ted.com"]']
  });

  /* =======================
  // Zoom Image
  ======================= */
  $(".page img, .post img").attr("data-action", "zoom");
  $(".page a img, .post a img").removeAttr("data-action", "zoom");

  /* =======================
  // Scroll Top Button
  ======================= */
  $(".top").click(function() {
    $("#scroll-container-example")
      .stop()
      .animate({ scrollTop: 0 }, "slow", "swing");
  });
  $("#scroll-container-example").scroll(function() {
    if ($(this).scrollTop() > $(window).height()) {
      $(".top").addClass("is-active");
    } else {
      $(".top").removeClass("is-active");
    }
  });


  $('#talks-list-btns').on('click', 'li', function(e) {
    console.log($(this).index());
    $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $("#talks-detail-list>div").eq(index).show().siblings().hide();
  });

  $(".nav__item_email").click(function(){
    var text = $(this).find('.email_text').eq(0).text()
    copyText(text)
    var spanElement = $("<span></span>");
    spanElement.text('"mailto: ' + text + '" copied to your clipboard');  // 添加文本内容

    // 设置样式
    spanElement.css({
        "color": "#fff",
        "background": "#000",
        "padding": ".5em 3em",
        "border-radius": "4px",
        "font-size": ".8em",
        "position": "fixed",
        "top": "8em",
        "left": '50%',
        "transform": "translateX(-50%)"
    });

    // 将 span 添加到 body 中
    $("body").append(spanElement);
    // 使用 delay 和 fadeOut 实现延迟消失，并在动画完成后移除元素
    spanElement.delay(1500).fadeOut("slow", function() {
      $(this).remove(); // 在动画完成后移除元素
  });
    

  })

  function copyText(text){
    var textareaC = document.createElement('textarea');
    textareaC.setAttribute('readonly', 'readonly'); //设置只读属性防止手机上弹出软键盘
    textareaC.value = text;
    document.body.appendChild(textareaC); //将textarea添加为body子元素
    textareaC.select();
    var res = document.execCommand('copy');
    document.body.removeChild(textareaC);//移除DOM元素
    return res;
}

  // 前端验证登录 release前展示
  // let value =  sessionStorage.getItem("FrontToken")
  // if(value && value == "ValueCompass"){
    
  //   $('.login-container').hide()
  //   $(".body-box").css("opacity",1)
  //   $(".body-box").show()
  // }else{
  //   $('.login-container').show()
  //   $(".body-box").css("opacity",0)
  //   $(".body-box").hide()
  // }
  // $('#log-btn').on('click', function () {
  //   let passwordValue = $("#password-input").val()
  //   console.log(passwordValue)
  //   if (passwordValue != "ValueCompass") {
  //     alert("请输入正确的密码");
  //   } else {
  //     $('.login-container').hide()
  //     $(".body-box").css("opacity",1)
  //     $(".body-box").show()
  //     sessionStorage.setItem("FrontToken", passwordValue);
  //   }
  // });

});
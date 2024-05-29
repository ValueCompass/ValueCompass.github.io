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
    searchClose();
  });

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
  // Instagram Feed
  ======================= */
  // userId and accessToken from Matthew Elsom (https://codepen.io/matthewelsom/pen/zrrrLN) for example, for which he thanks a lot!
  var instagramFeed = new Instafeed({
    get: 'user',
    limit: 6,
    resolution: 'standard_resolution',
    userId: '8987997106',
    accessToken: '8987997106.924f677.8555ecbd52584f41b9b22ec1a16dafb9',
    template:
      '<li class="instagram-item"><a href="{{link}}" aria-label="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}"></a></li>'
  });

  if ($('#instafeed').length) {
    instagramFeed.run();
  }

  /* =======================
  // Scroll Top Button
  ======================= */
  $(".top").click(function() {
    $("html, body")
      .stop()
      .animate({ scrollTop: 0 }, "slow", "swing");
  });
  $(window).scroll(function() {
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

  // 前端验证登录 release前展示
  let value =  sessionStorage.getItem("FrontToken")
  if(value && value == "ValueCompass"){
    
    $('.login-container').hide()
    $(".body-box").css("opacity",1)
    $(".body-box").show()
  }else{
    $('.login-container').show()
    $(".body-box").css("opacity",0)
    $(".body-box").hide()
  }
  $('#log-btn').on('click', function () {
    let passwordValue = $("#password-input").val()
    console.log(passwordValue)
    if (passwordValue != "ValueCompass") {
      alert("请输入正确的密码");
    } else {
      $('.login-container').hide()
      $(".body-box").css("opacity",1)
      $(".body-box").show()
      sessionStorage.setItem("FrontToken", passwordValue);
      // console.log(this.$route.query.redirect);
      let nextPath = sessionStorage.getItem("nextPath")
      // router.push("/");
    }
  });


  // bootstrap-toc
  // if ($("#toc-sidebar").length) {
  //   // remove related publications years from the TOC
  //   $(".publications h2").each(function () {
  //     $(this).attr("data-toc-skip", "");
  //   });
  //   var navSelector = "#toc-sidebar";
  //   var $myNav = $(navSelector);
  //   Toc.init($myNav);
  //   $("body").scrollspy({
  //     target: navSelector,
  //   });
  // }
  // $('#aaaa').scrollspy({ target: '#navbar-example' })
  



});

// $(function(){
//   $('[data-spy="scroll"]').each(function () {
//     var $spy = $(this).scrollspy('refresh')
//   })

//   $('#scroll-container-example').scrollspy({ target: '#navbar-example' })
// })
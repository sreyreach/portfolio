(function ($) {
  "use strict";

  $(document).ready(function () {
    $(".popup-img").magnificPopup({
      type: "image",
      // other options
      gallery: {
        // options for gallery
        enabled: true,
      },
    });

    /*------------------
		Navigation
	--------------------*/
    $(".main-menu").slicknav({
      appendTo: ".header-section",
      closedSymbol: '<i class="fa fa-angle-down"></i>',
      openedSymbol: '<i class="fa fa-angle-up"></i>',
    });

    $(".nav-switch-btn").on("click", function () {
      if (localStorage.getItem("navMenu") == null) {
        localStorage.setItem("navMenu", "show");
        $(".main-menu").slideDown(400);
      } else if (localStorage.getItem("navMenu") == "show") {
        localStorage.removeItem("navMenu");
        $(".main-menu").slideUp(400);
      }
    });

    if (localStorage.getItem("navMenu") == "show") {
      $(".main-menu").slideDown(400);
    }

    /*------------------
		Search model
	--------------------*/
    $(".search-btn").on("click", function () {
      $(".search-model").fadeIn(400);
    });

    $(".search-close-switch").on("click", function () {
      $(".search-model").fadeOut(400, function () {
        $("#search-input").val("");
      });
    });

    /* header_sticky */
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 150) {
        $("#header-sticky").removeClass("scroll-header");
      } else {
        $("#header-sticky").addClass("scroll-header");
      }
    });

    $(".main-menu ul li a").click(function (e) {
      $("li a").removeClass("active");
      $(this).addClass("active");
    });

    /* Preloader */
    $(window).on("load", function () {
      var preLoder = $(".hola");
      preLoder.fadeOut(2000);
    });

    /* Counter Up */
    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });

    /* SCROLL UP */
    $.scrollUp({
      easingType: "linear",
      scrollSpeed: 900,
      animation: "fade",
      scrollText: '<i class="fa fa-angle-up"></i>',
    });

    /* Mobile Nav */
    $("#nav-13").slicknav();
    $(".slicknav_menu").appendTo(".small-menu");

    /* Type Text*/
    if ($("#typewriting").length) {
      var app = document.getElementById("typewriting");
      var typewriter = new Typewriter(app, {
        loop: true,
      });
      typewriter
        .typeString("Way to achieve success")
        .pauseFor(2000)
        .deleteAll()
        .typeString("Style to achieve success")
        .pauseFor(2000)
        .deleteAll()
        .typeString("Method to achieve success")
        .start();
    }
    if ($("#personal").length) {
      var app = document.getElementById("personal");
      var personal = new Typewriter(app, {
        loop: true,
      });
      personal
        .typeString("UI/UX Designer.")
        .pauseFor(2000)
        .deleteAll()
        .typeString("Web Developer.")
        .pauseFor(2000)
        .deleteAll()
        .typeString("Wordpress Developer.")
        .start();
    }

    /* POPUP VIDEO */
    if ($(".video-btn").length) {
      $(".video-btn").on("click", function () {
        $.fancybox({
          href: this.href,
          type: $(this).data("type"),
          title: this.title,
          helpers: {
            title: { type: "inside" },
            media: {},
          },

          beforeShow: function () {
            $(".fancybox-wrap").addClass("gallery-fancybox");
          },
        });
        return false;
      });
    }

    /* portfolio-area */
    $(".section-Portfolio").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    var $grid = $(".grid.filter").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,

      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-item",
      },
    });
    //for filter menu active class
    $(".Portfolio-menu button").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });

    /* Progress Bar */
    $(document).ready(function () {
      $(".bar1").barfiller({ duration: 3000 });
      $(".bar2").barfiller({ duration: 3000 });
      $(".bar3").barfiller({ duration: 3000 });
      $(".bar4").barfiller({ duration: 3000 });
    });

    /* Client Slider */
    if ($(".slider-active").length) {
      $(".slider-active").owlCarousel({
        autoplay: false,
        smartSpeed: 600,
        items: 1,
        loop: true,
        dots: false,
        nav: false,
        navText: [
          "<i class='fa fa-long-arrow-left'></i>",
          "<i class='fa fa-long-arrow-right'></i>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          767: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });
    }

    /*-----------------------------------------------------
        =  CV  HOME PAGE PORTFOLIO MOUSE HOVER EFFECT
    ------------------------------------------------------*/
    if (jQuery(".Portfolio-grid .Portfolio-wrapper").length) {
      jQuery(".Portfolio-grid .Portfolio-wrapper").on(
        "mousemove",
        function (e) {
          var parentOffset = jQuery(this).parent().offset();
          var relX = e.pageX - parentOffset.left;
          var relY = e.pageY - parentOffset.top;

          jQuery(".section-Portfolio .Portfolio-wrapper i").css({ top: relY });
          jQuery(".section-Portfolio .Portfolio-wrapper i").css({ left: relX });
        }
      );
    }

    $(".mega").paroller();
  });
})(jQuery);

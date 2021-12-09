;(function($){

    $(".woo-categories-nav").click(function(){
        $(this).toggleClass("active");
    })

    $(".banner-main-content").owlCarousel({
        items:1,
        dots:false,
        nav:false
    })

    $(".banner-sub-content .sub-content-items").owlCarousel({
        items:4,
        dots:false,
        nav:false,
        margin:12
    })

    $(".six-column-slider").owlCarousel({
        items:6,
        dots:false,
        nav:false,
        margin:16
    })

    $(".five-column-slider").owlCarousel({
        items:5,
        dots:false,
        nav:false,
        margin:16
    })

    // Language Switcher  active

    $(".lang-switcher").on("click", function(e){
        e.preventDefault();
        $(".lang-list").toggleClass("lang-list-open");
      });
      $(".lang-list li").each(function(){
          $(this).on("click", function(){
              var logoSrc = $(this).children(".flag").children("img").attr("src"); 
              $(".lang-switcher > .flag img").attr("src", logoSrc);
          });
      });

    //   Show More Content

    $(".liked-products > .single-product").slice(0, 12).show();
    $(".show-more-btn").on("click", function(e){
        e.preventDefault()
        $(".liked-products > .single-product:hidden").slice(0, 6).slideDown()
        if ($(".liked-products > .single-product:hidden").length == 0) {
            $(".show-more-btn").fadeOut('slow')
        }
    })

})(jQuery);
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

    $(".one-column-slider").owlCarousel({
        items:1,
        dots:false,
        nav:false,
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

    // Categori sidebar load-more

    // $(".color-list > li").slice(0, 13).show();
    // $(".color-widget .view-more").on("click", function(e){
    //     e.preventDefault()
    //     $(".color-list > li:hidden").slice(0, 4).slideDown()
    //     if ($(".color-list > li:hidden").length == 0) {
    //         $(".color-widget .view-more").hide()
    //     }
    // })

    

    // $(".size-list > li").slice(0, 4).show();
    // $(".size-widget .view-more").on("click", function(e){
    //     e.preventDefault()
    //     $(".size-list > li:hidden").slice(0, 2).slideDown()
    //     if ($(".size-list > li:hidden").length == 0) {
    //         $(".size-widget .view-more").hide()
    //     }
    // })

    // $(".material-list > li").slice(0, 5).show();
    // $(".material-widget .view-more").on("click", function(e){
    //     e.preventDefault()
    //     $(".material-list > li:hidden").slice(0, 2).slideDown()
    //     if ($(".material-list > li:hidden").length == 0) {
    //         $(".material-widget .view-more").hide()
    //     }
    // })

    // $(".print-list > li").slice(0, 5).show();
    // $(".print-widget .view-more").on("click", function(e){
    //     e.preventDefault()
    //     $(".print-list > li:hidden").slice(0, 2).slideDown()
    //     if ($(".print-list > li:hidden").length == 0) {
    //         $(".print-widget .view-more").hide()
    //     }
    // })

    // $(".brand-list > a").slice(0, 4).show();
    // $(".brand-widget .view-more").on("click", function(e){
    //     e.preventDefault()
    //     $(".brand-list > a:hidden").slice(0, 4).slideDown()
    //     if ($(".brand-list > a:hidden").length == 0) {
    //         $(".brand-widget .view-more").hide()
    //     }
    // })


    $('.print-widget  .infinite-container').simpleLoadMore({
        item: '.load-more',
        count: 4,
        itemsToLoad: 3,
        easing:"slide"
    });

    $('.brand-widget  .infinite-container').simpleLoadMore({
        item: '.load-more',
        count: 4,
        itemsToLoad: 2,
        easing:"fade"
    });

    $('.material-widget  .infinite-container').simpleLoadMore({
        item: '.load-more',
        count: 5,
        itemsToLoad: 2,
        easing:"slide"
    });

    $('.color-widget  .infinite-container').simpleLoadMore({
        item: '.load-more',
        count: 13,
        itemsToLoad: 4,
        easing:"slide"
    });

    $('.size-widget  .infinite-container').simpleLoadMore({
        item: '.load-more',
        count: 5,
        itemsToLoad: 2,
        easing:"slide"
    });

    $('#cm-review').simpleLoadMore({
        item: '.load-more',
        count: 1,
        itemsToLoad: 1,
    });

    $('#cm-review .load-more__btn').text("See more comment");

    // Close Category Tabs

    var tabClose = $(".tab-close");
    var tabLinks = $(".category-list-2 .nav-link")

    for(var i = 0 ; i < tabClose.length ; i++){
        $(tabClose[i]).click(function(){
            if($(this).parent().parent().hasClass("active")){

                $(this).parent().parent().removeClass("active")

                navLinksRemove();
            }
        })
    }

    function navLinksRemove(){
        for ( var i=0; i< tabLinks.length ; i++){
            if($(tabLinks[i]).hasClass("active")){
                $(tabLinks[i]).removeClass("active")
            }
        }
    }

    // Slick Slider

    var path = window.location.pathname;
    var page = path.split("/").pop();
    if(page=="product-details.html"){

        $('.slider-thumb').slick({
            // autoplay: true,
            vertical: true,
            infinite: true,
            verticalSwiping: true,
            slidesPerRow: 5,
            slidesToShow: 5,
            asNavFor: '.product-slider-preview',
            focusOnSelect: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        vertical: false,
                    }
                },
                {
                    breakpoint: 479,
                    settings: {
                        vertical: false,
                        slidesPerRow: 3,
                        slidesToShow: 3,
                    }
                },
            ]
        });

        $('.product-slider-preview').slick({
            // autoplay: true,
            vertical: true,
            infinite: true,
            slidesPerRow: 1,
            slidesToShow: 1,
            asNavFor: '.slider-thumb',
            arrows: false,
            draggable: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        vertical: false,
                        fade: true,
                    }
                },
            ]
        });
    }

})(jQuery);

(function(){

    const categoryBox = document.getElementsByClassName("single-sub-category");

    for ( i = 0; i < categoryBox.length ; i++){
        categoryBox[i].addEventListener("click",function(){
            this.classList.toggle("active")
        })
    }
    
})()
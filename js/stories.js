(function($){
  $(document).ready(function(){

    // Make sure all current links have 'active' class'
    var currentPathName = location.pathname;
    $('a[href="'+currentPathName+'"]').addClass('active');

    // $(window).scroll(function(){
    //   if(window.scrollY > 120) {
    //     $('#mobile-nav').addClass('at-top')
    //   } else {
    //     $('#mobile-nav').removeClass('at-top')
    //   }
    // })

    // Open the mobile menu
    $('.menu-button').click(function(e){
      e.preventDefault();
      $('body').toggleClass('mobile-nav-visible')
    })


    // Close the mobile menu
    $('.close-button').click(function(e){
      e.preventDefault();
      $('body').removeClass('mobile-nav-visible')
    })


    // Close the menu when someone clicks on the
    // contact link (if the menu is open)
    $('a[href="#contact"]').click(function(e){
      $('body').removeClass('mobile-nav-visible')
    })

    // Hide menu if the user resizes the menu into desktop
    // layout while the mobile fullscreen menu is open
    $(window).resize(function(e){
      if( $('body').hasClass('mobile-nav-visible') ) {
        $('body').removeClass('mobile-nav-visible')
      }
    })

  })
})(jQuery);

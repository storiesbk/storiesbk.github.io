(function($){
  $(document).ready(function(){

    // Make sure all current links have 'active' class'
    var currentPathName = location.pathname;
    $('a[href="'+currentPathName+'"]').addClass('active');

    $(window).scroll(function(){
      console.log('ok')
      if(window.scrollY > 120) {
        $('#mobile-nav').addClass('at-top')
      } else {
        $('#mobile-nav').removeClass('at-top')
      }
    })

    // Open the mobile menu
    $('.menu-button').click(function(e){
      e.preventDefault();
      $('#mobile-fullscreen-menu').addClass('visible')
    })


    // Close the mobile menu
    $('.close-button').click(function(e){
      e.preventDefault();
      $('#mobile-fullscreen-menu').removeClass('visible');
    })


    // Close the menu when someone clicks on the
    // contact link (if the menu is open)
    $('a[href="#contact"]').click(function(e){
      $('#mobile-fullscreen-menu').removeClass('visible')
    })

  })
})(jQuery);

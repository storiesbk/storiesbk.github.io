(function($){
  $(document).ready(function(){

    // Make sure all current links have 'active' class'
    var currentPathName = location.pathname;
    $('a[href="'+currentPathName+'"]').addClass('active');


    $(window).scroll(function(){
      console.log('ok')
    })


    // Open the mobile menu
    $('.menu-button').click(function(e){
      e.preventDefault();
      $('#mobile-nav').addClass('visible')
    })


    // Close the mobile menu
    $('.close-button').click(function(e){
      e.preventDefault();
      $('#mobile-nav').removeClass('visible');
    })


    // Close the menu when someone clicks on the
    // contact link (if the menu is open)
    $('a[href="#contact"]').click(function(e){
      $('#mobile-nav').removeClass('visible')
    })

  })
})(jQuery);

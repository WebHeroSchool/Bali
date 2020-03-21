(function($){
  $(function() {
    $('.header__menu-icon').on('click', function() {
      $(this).closest('.header').toggleClass('menu_state_open');
    });
  });
})(jQuery);
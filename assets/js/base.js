/**
 * @file
 */
(function ($, Drupal) {
  'use strict';

  /**
   * Sticky header on scroll.
   */
  function stickyHeader() {
    let header = $('.header');
    let headerHeight = header.outerHeight()
    let pageWrapper = $('.dialog-off-canvas-main-canvas');

    if ($(window).outerWidth() > 0){
      let windowScroll = $(window).scrollTop();
      if (windowScroll >= headerHeight) {
        header.addClass('is-fixed');
        pageWrapper.attr('style', 'padding-top: ' + headerHeight + 'px');
      } else {
        header.removeClass('is-fixed');
        pageWrapper.removeAttr('style');
      }
    }
  }

  $(window).scroll(function () {
    stickyHeader();
  });

  stickyHeader();


  /**
   * Mobile menu.
   */
  $('.mobile-menu__trigger').click(function () {
    $(this).toggleClass('is-active');
  });

})(jQuery, Drupal);

(function ($, Drupal) {
  Drupal.behaviors.base = {
    attach: function (context, settings) {
      /**
       * Phone input mask.
       */
      let phone_fields = $('input[name*="phone"]');
      phone_fields.attr('type','tel').mask('+7 (999) 999-99-99');
    }
  };
})(jQuery, Drupal);

/**
 * @file
 */
(function ($, Drupal) {
  'use strict';

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

/**
 * @file
 */

(function (Drupal) {

  'use strict';

  // Sticky header on scroll.
  function stickyHeader() {
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;
    const pageWrapper = document.querySelector('.dialog-off-canvas-main-canvas');

    let windowScroll = window.pageYOffset;
    if (windowScroll >= headerHeight) {
      header.classList.add('is-fixed');
      pageWrapper.setAttribute('style', 'padding-top: ' + headerHeight + 'px');
    } else {
      header.classList.remove('is-fixed');
      pageWrapper.removeAttribute('style');
    }
  }

  window.addEventListener('scroll', function () {
    stickyHeader();
  })

  stickyHeader();

  // Toggler element.
  const toggler = document.querySelectorAll('.toggler');
  toggler.forEach(function (item) {
    item.addEventListener('click', function () {
      this.classList.toggle('is-active');
    })
  })

})(Drupal);

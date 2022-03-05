/**
 * @file
 */

(function (Drupal) {

  'use strict';

  Drupal.behaviors.modals = {
    attach: function (context, settings) {
      let modalWrap = document.querySelector('.modals');
      let modalOverlay = document.querySelector('.modal-overlay');
      let modalBlockClose = document.querySelectorAll('.close-modals');
      let modalTrigger = document.querySelectorAll('.modal-trigger');

      // Show modal block.
      function showModal(blockId){
        modalWrap.classList.add('is-visible');
        let modalBlock = document.querySelector(blockId);
        modalBlock.classList.add('is-visible');
      }

      // Mobile trigger click event.
      modalTrigger.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
          const modalBlockId = '#' + trigger.getAttribute('data-modal');
          showModal(modalBlockId);
        })
      })

      // Modal blocks close.
      function closeModals() {
        modalWrap.classList.remove('is-visible');
        let modalBlocks = document.querySelectorAll('.modal-block');
        modalBlocks.forEach(function (block) {
          block.classList.remove('is-visible');
        })
      }

      modalOverlay.addEventListener('click', function () {
        closeModals();
      });

      modalBlockClose.forEach(function (modalClose) {
        modalClose.addEventListener('click', function () {
          closeModals();
        });
      })
    }
  };
})(Drupal);

/**
 * @file
 */
'use strict';

let tab = document.querySelectorAll('.tab');
var siblings = n => [...n.parentElement.children].filter(c => c != n);

tab.forEach(function (tab) {
  tab.addEventListener('click', function (e) {
    siblings(tab).forEach(function (sibling) {
      sibling.classList.remove('is-active');
    })

    tab.classList.toggle('is-active');

    let tabId = tab.getAttribute('data-tab');
    let tabContent = document.querySelector('.tabcontent[data-tab="' + tabId + '"]');

    let group = tab.closest('.tabsgroup');
    group.querySelectorAll('.tabcontent').forEach(function (el) {
      el.classList.remove('is-visible');
    });

    if (!tabContent) {
      return;
    }

    if (tab.classList.contains('is-active')) {
      tabContent.classList.add('is-visible');
    } else {
      tabContent.classList.remove('is-visible');
    }
  });
})

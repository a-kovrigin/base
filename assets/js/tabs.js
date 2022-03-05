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

    let subGroups = group.querySelectorAll('.tabsgroup');
    if (subGroups.length > 0) {
      subGroups.forEach(function (subGroup) {
        subGroup.querySelectorAll('.tab').forEach(function (subTab) {
          subTab.classList.remove('is-active');
        })
      })
    }

    if (!tabContent) {
      return;
    }

    if (tab.classList.contains('is-active')) {
      tabContent.classList.add('is-visible');
    } else {
      tabContent.classList.remove('is-visible');
    }
  });
});

let tabsgroup = document.querySelectorAll('.tabsgroup');
tabsgroup.forEach(function (group) {
  group.querySelector('.tab').dispatchEvent(new Event('click'));
})

/* global $ */

'use strict';

const scroll = function() {

  function scrollAnimation(link, id) {
    $(link).on('click', function() {
      $([document.documentElement, document.body]).animate({
        scrollTop: $(id).offset().top
      }, 1500);
    });
  }

  scrollAnimation('.logo', '#main');
  scrollAnimation('.home', '#main');
  scrollAnimation('.about', '#about');
  scrollAnimation('.projects', '#projects');
  scrollAnimation('.contact', '#contact');
};

$(scroll);
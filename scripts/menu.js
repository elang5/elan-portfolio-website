/* global $ */

'use strict';

const menuChange = function() {
  $('.menu').on('click', function() {
    $('.menu').children().toggleClass('change');
    $('.dropdown').toggleClass('hidden');
  });

  $('.js-about').on('click', function() {
    $('.container').toggleClass('hidden');
  });
};

$(menuChange);
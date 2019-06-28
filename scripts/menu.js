'use strict';

function openNav() {
  document.getElementById('nav').style.width = '200px'
}

function closeNav() {
  document.getElementById('nav').style.width = '0'
}

const menuChange = function() {
  $('.js-about').on('click', function() {
    $('.container').toggleClass('hidden');
  });
};

$(menuChange)


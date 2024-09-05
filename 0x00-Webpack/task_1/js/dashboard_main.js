import $ from 'jquery';
import _ from 'lodash';

function updateCounter() {
  let count = 0;
  return function() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  };
}

$(document).ready(function() {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="start">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  $('#start').on('click', _.debounce(updateCounter(), 500));
});

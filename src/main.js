import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
  $("#character").submit(function (event) {
    const userName = $('#name').val()
    const newCharacter = userCharacter(`${valuefrominputvariable} Name: ${userName}}`)
    // updateStats();
    $(form).slideUp();
    $('display').show();
    $('rollDice').show();
    event.preventDefault();
  })

  $('#rollDice').click(function () {
    doAction(rollDice());
    updateStats();
  });
})










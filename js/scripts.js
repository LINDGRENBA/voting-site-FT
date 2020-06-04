$(document).ready(function() {

  let userAgeInput = parseInt(prompt('Please enter your age'));

  if(userAgeInput >= 18) {
    $("#eighteen-up").show();
    $("#under-eighteen").hide();
  } else {
    $("#under-eighteen").show();
    $("#eighteen-up").hide();
  }

});
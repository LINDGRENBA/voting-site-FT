$(document).ready(function() {

  let userAgeInput = parseInt(prompt('Please enter your age'));

  if(userAgeInput >= 18) {
    $("#eighteen-up").show();
  } else {
    $("#under-eighteen").show();
  }

});
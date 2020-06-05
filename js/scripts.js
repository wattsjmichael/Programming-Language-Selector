$(document).ready(function() {
  $("form#programmingLanguage").submit(function(event) {
    const age = parseInt($("input#age").val());
    const food = $("select#food").val();
    const favOS = $("select#favOS").val();

  if (age >=0 && food === "pizza" || favOS === "mac") {
    $("#ruby").show();
  } else if (age >=35|| food === "pizza" && favOS === "win") {
    $("#cSharp").show();
  } else if (age <=20 && food === "notPizza" && favOS === "huh") {
    $("#javascript").show();
  }

  event.preventDefault();
  });
});

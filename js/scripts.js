$(document).ready(function() {
  $("form#programmingLanguage").submit(function(event) {
    const age = parseInt($("input#age").val());
    const food = $("select#food").val();
    const favOS = $("select#favOS").val();
    const sign = $("input:radio[name=sign]:checked").val();

  if (age >=34 && food === "pizza" || favOS === "mac") {
    $("#ruby").show();
  } else if (age >=35) {
    $("#cSharp").show();
  } else if (age <=20 && food === "notPizza") {
    $("#javascript").show();
  } else if (sign === "notStopSign")
    $("#driving").show();

  event.preventDefault();
  });
});

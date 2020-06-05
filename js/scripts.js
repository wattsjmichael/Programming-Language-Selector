$(document).ready(function() {
  $("form#programmingLanguage").submit(function(event) {
    const age = parseInt($("input#age").val());
    const food = $("select#food").val();
    const favOS = $("select#favOS").val();
    const sign = $("input:radio[name=sign]:checked").val();
    const exp = $("input:radio[name=exp]:checked").val();

  if (food === "pizza" && favOS === "mac") {
    $("#ruby").show();
  } else if (age >=35 && exp === "notExperienced") {
    $("#cSharp").show();
  } else if (age <=20 && food === "notPizza") {
    $("#javascript").show();
  } else if (exp === "notExperienced") {
    $("#hackers").show();
  }

  event.preventDefault();
  });
});

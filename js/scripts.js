$(document).ready(function() {
  $("form#programmingLanguage").submit(function(event) {
    let age = parseInt($("input#age").val());
    let food = $("select#food").val();
    let favOs = $("select#favOs").val();
    let exp = $("input:radio[name=experience]:checked").val();

  if (favOs === "mac") {
    $("#ruby").show();
  } else if (favOs === "windows" || exp === "exp") {
    $("#cSharp").show();
  } else if (age <=34 && food === "pizza") {
    $("#javascript").show();
  } else if (age >=35 && exp === "notExp") {
    $("#hackers").show();
  } else {
    $("#epicodus").show();
  }

  event.preventDefault();
  });
});

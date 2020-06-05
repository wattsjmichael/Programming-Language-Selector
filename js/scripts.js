$(document).ready(function() {
  $("form#programmingLanguage").submit(function(event) {
    const age = parseInt($("input#age").val());
    const food = $("select#food").val();
    const favOS = $("select#favOS").val();
    const exp = $("input:radio[name=experience]:checked").val();

  if (favOS === "mac") {
    $("#ruby").show();
  } else if (favOS ==="win") {
    $("#cSharp").show();
  } else if (age <=34 && food === "pizza") {
    $("#javascript").show();
  } else if (age >=35 && exp === "notExperienced") {
    $("#hackers").show();
  } else {
    $("#epicodus").show();
  }

  event.preventDefault();
  });
});

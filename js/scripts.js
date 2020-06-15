$(document).ready(function() {
  $("form#programmingLanguage").submit(function(event) {
    let age = parseInt($("input#age").val());
    let food = $("select#food").val();
    let favOs = $("select#favOs").val();
    let exp = $("input:radio[name=experience]:checked").val();

    if (favOs === "mac") {
      $("#ruby").show();
      $("#cSharp").hide();
      $("#javascript").hide();
      $("#hackers").hide();
      $("#epicodus").hide();
  } else if (favOs === "windows" || exp === "exp") {
      $("#cSharp").show();
      $("#ruby").hide();
      $("#javascript").hide();
      $("#hackers").hide();
      $("#epicodus").hide();
  } else if (age <=34 && food === "pizza") {
      $("#javascript").show();
      $("#cSharp").hide();
      $("#ruby").hide();
      $("#hackers").hide();
      $("#epicodus").hide();
  } else if (age >=35 && exp === "notExp") {
      $("#hackers").show();
      $("#javascript").hide();
      $("#cSharp").hide();
      $("#ruby").hide();
      $("#epicodus").hide();
  } else {
      $("#epicodus").show();
      $("#hackers").hide();
      $("#javascript").hide();
      $("#cSharp").hide();
      $("#ruby").hide();
      $("#epicodus").hide();
  }

  event.preventDefault();
  });
});

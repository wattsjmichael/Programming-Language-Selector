$(document).ready(function() {
  $("form#coding").submit(function(event){
    const favoriteFood = $("select#favoriteFood").val();

    if (favoriteFood == "pizza") {
      $("#rubyAnswer").show();
    } else if (favoriteFood == "brusselSprouts") {
      $("#cSharpAnswer").show();
    } else {
      $("#javascriptAnswer").show();
    }

    event.preventDefault();
  });
});

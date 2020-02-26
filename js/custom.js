$(function() {
  var current_progress = 0;
  var interval = setInterval(function() {
      current_progress += 10;
      $("#dynamic")
      .css("width", current_progress + "%")
      .attr("aria-valuenow", current_progress)
      .text(current_progress + "% Complete");
     if (current_progress == 20){
        $("#dynamic").css('background-color', 'orange');
     }
    if (current_progress == 50){
        $("#dynamic").css('background-color', 'pink');
     }
    if (current_progress == 70){
        $("#dynamic").css('background-color', 'red');
     }
      if (current_progress >= 100){
        $("#dynamic").css('background-color', 'blue');
          clearInterval(interval); }
  }, 1000);
 
});
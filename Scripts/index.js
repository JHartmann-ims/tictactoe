$(document).ready(function () {
  var count = 0;

  $("td").click(function () {
    //changing between
    if ($(this).is(':empty')) {
      //number of clicks
      count++;
      $("#num").text(count);
      if (count % 2 == 0) {
        $(this).prepend('<img class="x" src="../Images/x.png" />');
      } else if (count % 2 != 0) {
        $(this).prepend('<img class="circle" src="../Images/circle.png" />');
      }
    }


    //http://sstut.com/jquery/check-if-element-contains-another.php
    if ($("#field1").has(".circle").length && $("#field2").has(".circle").length && $("#field3").has(".circle").length || $("#field1").has(".x").length && $("#field2").has(".x").length && $("#field3").has(".x").length) {
      $("#field1").css("background-color", "green");
      $("#field2").css("background-color", "green");
      $("#field3").css("background-color", "green");
    } else if ($("#field4").has(".circle").length && $("#field5").has(".circle").length && $("#field6").has(".circle").length || $("#field4").has(".x").length && $("#field5").has(".x").length && $("#field6").has(".x").length) {
      $("#field4").css("background-color", "green");
      $("#field5").css("background-color", "green");
      $("#field6").css("background-color", "green");
    } else if ($("#field7").has(".circle").length && $("#field8").has(".circle").length && $("#field9").has(".circle").length || $("#field7").has(".x").length && $("#field8").has(".x").length && $("#field9").has(".x").length) {
      $("#field7").css("background-color", "green");
      $("#field8").css("background-color", "green");
      $("#field9").css("background-color", "green");
    } else if ($("#field1").has(".circle").length && $("#field4").has(".circle").length && $("#field7").has(".circle").length || $("#field1").has(".x").length && $("#field4").has(".x").length && $("#field7").has(".x").length) {
      $("#field1").css("background-color", "green");
      $("#field4").css("background-color", "green");
      $("#field7").css("background-color", "green");
    } else if ($("#field2").has(".circle").length && $("#field5").has(".circle").length && $("#field8").has(".circle").length || $("#field2").has(".x").length && $("#field5").has(".x").length && $("#field8").has(".x").length) {
      $("#field2").css("background-color", "green");
      $("#field5").css("background-color", "green");
      $("#field8").css("background-color", "green");
    } else if ($("#field3").has(".circle").length && $("#field6").has(".circle").length && $("#field9").has(".circle").length || $("#field3").has(".x").length && $("#field6").has(".x").length && $("#field9").has(".x").length) {
      $("#field3").css("background-color", "green");
      $("#field6").css("background-color", "green");
      $("#field9").css("background-color", "green");
    } else if ($("#field1").has(".circle").length && $("#field5").has(".circle").length && $("#field9").has(".circle").length || $("#field1").has(".x").length && $("#field5").has(".x").length && $("#field9").has(".x").length) {
      $("#field1").css("background-color", "green");
      $("#field5").css("background-color", "green");
      $("#field9").css("background-color", "green");
    } else if ($("#field7").has(".circle").length && $("#field5").has(".circle").length && $("#field3").has(".circle").length || $("#field7").has(".x").length && $("#field5").has(".x").length && $("#field3").has(".x").length) {
      $("#field7").css("background-color", "green");
      $("#field5").css("background-color", "green");
      $("#field3").css("background-color", "green");
    } else if ($("#field1").has("img").length && $("#field2").has("img").length && $("#field3").has("img").length && $("#field4").has("img").length && $("#field5").has("img").length && $("#field6").has("img").length && $("#field7").has("img").length && $("#field8").has("img").length && $("#field9").has("img").length) {
      $("#field1").css("background-color", "red");
    }

  });

  //if schleife
});

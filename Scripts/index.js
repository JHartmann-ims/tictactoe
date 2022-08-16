$(document).ready(function () {
  var count = 0;

  $("td").click(function () {
    //number of clicks
    count++;
    $("#num").text(count);

    //changing between
    if ($(this).is(':empty')) {
      if (count % 2 == 0) {
        $(this).prepend('<img src="../Images/x.png" />');
      } else if (count % 2 != 0) {
        $(this).prepend('<img src="../Images/circle.png" />');
      }
    }

    /* if ($("img").width) {
    } else if ($("img").width == 0) {
      if (count % 2 == 0) {
        $(this).prepend('<img src="../Images/x.png" />');
      } else if (count % 2 != 0) {
        $(this).prepend('<img src="../Images/circle.png" />');
      }
    } */
  });

  //if schleife
});

$(document).ready(function () {
  var count = 0;
  let won = false;

  $("td").click(function () {
    //changing between
    if (won == false) {
      if ($(this).is(":empty")) {
        //number of clicks
        count++;
        console.log(count);
        if (count % 2 == 0) {
          $(this).prepend('<img class="x" src="Images/x.png" />');
        } else if (count % 2 != 0) {
          $(this).prepend('<img class="circle" src="Images/circle.png" />');
        }
      } else if (won == true) {
      }
    }

    if (
      //fields with circle
      $("#field1").has(".circle").length &&
      $("#field2").has(".circle").length &&
      $("#field3").has(".circle").length
    ) {
      $("#field1").css("background-color", "green");
      $("#field2").css("background-color", "green");
      $("#field3").css("background-color", "green");

      won = true;

      $(".inner-container")
        .children()
        .css({ opacity: 0.6 })
        .end()
        .css({ opacity: 0.6 });

      $("<div id='wonDisplay'><p>Circle won<p></div>")
        .css({
          position: "absolute",
          width: "60%",
          height: "25%",
          background: "grey",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "3px solid black",
        })
        .appendTo($(".game-container").css("position", "relative"));

      $("<button type='button' class='btn btn-dark restartBtn'>Restart</button>").appendTo(
        $("#wonDisplay")
      );

        $(".restartBtn").click(function () {
          location.reload(true);
        });

    } else if (
      $("#field4").has(".circle").length &&
      $("#field5").has(".circle").length &&
      $("#field6").has(".circle").length
    ) {
      $("#field4").css("background-color", "green");
      $("#field5").css("background-color", "green");
      $("#field6").css("background-color", "green");

      won = true;

      $(".inner-container")
        .children()
        .css({ opacity: 0.6 })
        .end()
        .css({ opacity: 0.6 });

      $("<div id='wonDisplay'><p>Circle won<p></div>")
        .css({
          position: "absolute",
          width: "60%",
          height: "25%",
          background: "grey",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "3px solid black",
        })
        .appendTo($(".game-container").css("position", "relative"));

      $("<button type='button' class='btn btn-dark restartBtn'>Restart</button>").appendTo(
        $("#wonDisplay")
      );

        $(".restartBtn").click(function () {
          location.reload(true);
        });
    } else if (
      $("#field7").has(".circle").length &&
      $("#field8").has(".circle").length &&
      $("#field9").has(".circle").length
    ) {
      $("#field7").css("background-color", "green");
      $("#field8").css("background-color", "green");
      $("#field9").css("background-color", "green");

      won = true;

      $(".inner-container")
        .children()
        .css({ opacity: 0.6 })
        .end()
        .css({ opacity: 0.6 });

      $("<div id='wonDisplay'><p>Circle won<p></div>")
        .css({
          position: "absolute",
          width: "60%",
          height: "25%",
          background: "grey",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "3px solid black",
        })
        .appendTo($(".game-container").css("position", "relative"));

      $("<button type='button' class='btn btn-dark restartBtn'>Restart</button>").appendTo(
        $("#wonDisplay")
      );

        $(".restartBtn").click(function () {
          location.reload(true);
        });
    } else if (
      $("#field1").has(".circle").length &&
      $("#field4").has(".circle").length &&
      $("#field7").has(".circle").length
    ) {
      $("#field1").css("background-color", "green");
      $("#field4").css("background-color", "green");
      $("#field7").css("background-color", "green");

      won = true;

      $(".inner-container")
        .children()
        .css({ opacity: 0.6 })
        .end()
        .css({ opacity: 0.6 });

      $("<div id='wonDisplay'><p>Circle won<p></div>")
        .css({
          position: "absolute",
          width: "60%",
          height: "25%",
          background: "grey",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "3px solid black",
        })
        .appendTo($(".game-container").css("position", "relative"));

      $("<button type='button' class='btn btn-dark restartBtn'>Restart</button>").appendTo(
        $("#wonDisplay")
      );

        $(".restartBtn").click(function () {
          location.reload(true);
        });
    } else if (
      $("#field2").has(".circle").length &&
      $("#field5").has(".circle").length &&
      $("#field8").has(".circle").length
    ) {
      $("#field2").css("background-color", "green");
      $("#field5").css("background-color", "green");
      $("#field8").css("background-color", "green");

      won = true;

      $(".inner-container")
        .children()
        .css({ opacity: 0.6 })
        .end()
        .css({ opacity: 0.6 });

      $("<div id='wonDisplay'><p>Circle won<p></div>")
        .css({
          position: "absolute",
          width: "60%",
          height: "25%",
          background: "grey",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "3px solid black",
        })
        .appendTo($(".game-container").css("position", "relative"));

      $("<button type='button' class='btn btn-dark restartBtn'>Restart</button>").appendTo(
        $("#wonDisplay")
      );

        $(".restartBtn").click(function () {
          location.reload(true);
        });
    } else if (
      $("#field3").has(".circle").length &&
      $("#field6").has(".circle").length &&
      $("#field9").has(".circle").length
    ) {
      $("#field3").css("background-color", "green");
      $("#field6").css("background-color", "green");
      $("#field9").css("background-color", "green");

      won = true;

      $(".inner-container")
        .children()
        .css({ opacity: 0.6 })
        .end()
        .css({ opacity: 0.6 });

      $("<div id='wonDisplay'><p>Circle won<p></div>")
        .css({
          position: "absolute",
          width: "60%",
          height: "25%",
          background: "grey",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "3px solid black",
        })
        .appendTo($(".game-container").css("position", "relative"));

      $("<button type='button' class='btn btn-dark restartBtn'>Restart</button>").appendTo(
        $("#wonDisplay")
      );

        $(".restartBtn").click(function () {
          location.reload(true);
        });
    } else if (
      $("#field1").has(".circle").length &&
      $("#field5").has(".circle").length &&
      $("#field9").has(".circle").length
    ) {
      $("#field1").css("background-color", "green");
      $("#field5").css("background-color", "green");
      $("#field9").css("background-color", "green");

      won = true;

      $(".inner-container")
        .children()
        .css({ opacity: 0.6 })
        .end()
        .css({ opacity: 0.6 });

      $("<div id='wonDisplay'><p>Circle won<p></div>")
        .css({
          position: "absolute",
          width: "60%",
          height: "25%",
          background: "grey",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "3px solid black",
        })
        .appendTo($(".game-container").css("position", "relative"));

      $("<button type='button' class='btn btn-dark restartBtn'>Restart</button>").appendTo(
        $("#wonDisplay")
      );

        $(".restartBtn").click(function () {
          location.reload(true);
        });
    } else if (
      $("#field7").has(".circle").length &&
      $("#field5").has(".circle").length &&
      $("#field3").has(".circle").length
    ) {
      $("#field7").css("background-color", "green");
      $("#field5").css("background-color", "green");
      $("#field3").css("background-color", "green");

      won = true;

      $(".inner-container")
        .children()
        .css({ opacity: 0.6 })
        .end()
        .css({ opacity: 0.6 });

      $("<div id='wonDisplay'><p>Circle won<p></div>")
        .css({
          position: "absolute",
          width: "60%",
          height: "25%",
          background: "grey",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "3px solid black",
        })
        .appendTo($(".game-container").css("position", "relative"));

      $("<button type='button' class='btn btn-dark restartBtn'>Restart</button>").appendTo(
        $("#wonDisplay")
      );

        $(".restartBtn").click(function () {
          location.reload(true);
        });
    } else if (
      //fields with x
      $("#field1").has(".x").length &&
      $("#field2").has(".x").length &&
      $("#field3").has(".x").length
    ) {
      $("#field1").css("background-color", "green");
      $("#field2").css("background-color", "green");
      $("#field3").css("background-color", "green");

      won = true;

      $(".inner-container")
        .children()
        .css({ opacity: 0.6 })
        .end()
        .css({ opacity: 0.6 });

      $("<div id='wonDisplay'><p>X won<p></div>")
        .css({
          position: "absolute",
          width: "60%",
          height: "25%",
          background: "grey",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "3px solid black",
        })
        .appendTo($(".game-container").css("position", "relative"));

      $("<button type='button' class='btn btn-dark restartBtn'>Restart</button>").appendTo(
        $("#wonDisplay")
      );

        $(".restartBtn").click(function () {
          location.reload(true);
        });
    } else if (
      $("#field4").has(".x").length &&
      $("#field5").has(".x").length &&
      $("#field6").has(".x").length
    ) {
      $("#field4").css("background-color", "green");
      $("#field5").css("background-color", "green");
      $("#field6").css("background-color", "green");

      won = true;

      $(".inner-container")
        .children()
        .css({ opacity: 0.6 })
        .end()
        .css({ opacity: 0.6 });

      $("<div id='wonDisplay'><p>X won<p></div>")
        .css({
          position: "absolute",
          width: "60%",
          height: "25%",
          background: "grey",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "3px solid black",
        })
        .appendTo($(".game-container").css("position", "relative"));

      $("<button type='button' class='btn btn-dark restartBtn'>Restart</button>").appendTo(
        $("#wonDisplay")
      );

        $(".restartBtn").click(function () {
          location.reload(true);
        });
    } else if (
      $("#field7").has(".x").length &&
      $("#field8").has(".x").length &&
      $("#field9").has(".x").length
    ) {
      $("#field7").css("background-color", "green");
      $("#field8").css("background-color", "green");
      $("#field9").css("background-color", "green");

      won = true;

      $(".inner-container")
        .children()
        .css({ opacity: 0.6 })
        .end()
        .css({ opacity: 0.6 });

      $("<div id='wonDisplay'><p>X won<p></div>")
        .css({
          position: "absolute",
          width: "60%",
          height: "25%",
          background: "grey",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "3px solid black",
        })
        .appendTo($(".game-container").css("position", "relative"));

      $("<button type='button' class='btn btn-dark restartBtn'>Restart</button>").appendTo(
        $("#wonDisplay")
      );

        $(".restartBtn").click(function () {
          location.reload(true);
        });
    } else if (
      $("#field1").has(".x").length &&
      $("#field5").has(".x").length &&
      $("#field9").has(".x").length
    ) {
      $("#field1").css("background-color", "green");
      $("#field5").css("background-color", "green");
      $("#field9").css("background-color", "green");

      won = true;

      $(".inner-container")
        .children()
        .css({ opacity: 0.6 })
        .end()
        .css({ opacity: 0.6 });

      $("<div id='wonDisplay'><p>X won<p></div>")
        .css({
          position: "absolute",
          width: "60%",
          height: "25%",
          background: "grey",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "3px solid black",
        })
        .appendTo($(".game-container").css("position", "relative"));

      $("<button type='button' class='btn btn-dark restartBtn'>Restart</button>").appendTo(
        $("#wonDisplay")
      );

        $(".restartBtn").click(function () {
          location.reload(true);
        });
    } else if (
      $("#field3").has(".x").length &&
      $("#field5").has(".x").length &&
      $("#field7").has(".x").length
    ) {
      $("#field3").css("background-color", "green");
      $("#field5").css("background-color", "green");
      $("#field7").css("background-color", "green");

      won = true;

      $(".inner-container")
        .children()
        .css({ opacity: 0.6 })
        .end()
        .css({ opacity: 0.6 });

      $("<div id='wonDisplay'><p>X won<p></div>")
        .css({
          position: "absolute",
          width: "60%",
          height: "25%",
          background: "grey",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "3px solid black",
        })
        .appendTo($(".game-container").css("position", "relative"));

      $("<button type='button' class='btn btn-dark restartBtn'>Restart</button>").appendTo(
        $("#wonDisplay")
      );

        $(".restartBtn").click(function () {
          location.reload(true);
        });
    } else if (
      $("#field1").has(".x").length &&
      $("#field4").has(".x").length &&
      $("#field7").has(".x").length
    ) {
      $("#field1").css("background-color", "green");
      $("#field4").css("background-color", "green");
      $("#field7").css("background-color", "green");

      won = true;

      $(".inner-container")
        .children()
        .css({ opacity: 0.6 })
        .end()
        .css({ opacity: 0.6 });

      $("<div id='wonDisplay'><p>X won<p></div>")
        .css({
          position: "absolute",
          width: "60%",
          height: "25%",
          background: "grey",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "3px solid black",
        })
        .appendTo($(".game-container").css("position", "relative"));

      $("<button type='button' class='btn btn-dark restartBtn'>Restart</button>").appendTo(
        $("#wonDisplay")
      );

        $(".restartBtn").click(function () {
          location.reload(true);
        });
    } else if (
      $("#field2").has(".x").length &&
      $("#field5").has(".x").length &&
      $("#field8").has(".x").length
    ) {
      $("#field2").css("background-color", "green");
      $("#field5").css("background-color", "green");
      $("#field8").css("background-color", "green");

      won = true;

      $(".inner-container")
        .children()
        .css({ opacity: 0.6 })
        .end()
        .css({ opacity: 0.6 });

      $("<div id='wonDisplay'><p>X won<p></div>")
        .css({
          position: "absolute",
          width: "60%",
          height: "25%",
          background: "grey",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "3px solid black",
        })
        .appendTo($(".game-container").css("position", "relative"));

      $("<button type='button' class='btn btn-dark restartBtn'>Restart</button>").appendTo(
        $("#wonDisplay")
      );

        $(".restartBtn").click(function () {
          location.reload(true);
        });
    } else if (
      $("#field3").has(".x").length &&
      $("#field6").has(".x").length &&
      $("#field9").has(".x").length
    ) {
      $("#field3").css("background-color", "green");
      $("#field6").css("background-color", "green");
      $("#field9").css("background-color", "green");

      won = true;

      $(".inner-container")
        .children()
        .css({ opacity: 0.6 })
        .end()
        .css({ opacity: 0.6 });

      $("<div id='wonDisplay'><p>X won<p></div>")
        .css({
          position: "absolute",
          width: "60%",
          height: "25%",
          background: "grey",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "3px solid black",
        })
        .appendTo($(".game-container").css("position", "relative"));

      $("<button type='button' class='btn btn-dark restartBtn'>Restart</button>").appendTo(
        $("#wonDisplay")
      );

        $(".restartBtn").click(function () {
          location.reload(true);
        });
    } else if (
      $("#field1").has("img").length &&
      $("#field2").has("img").length &&
      $("#field3").has("img").length &&
      $("#field4").has("img").length &&
      $("#field5").has("img").length &&
      $("#field6").has("img").length &&
      $("#field7").has("img").length &&
      $("#field8").has("img").length &&
      $("#field9").has("img").length
    ) {
      $(
        "#field1, #field2, #field3, #field4, #field5, #field6, #field7, #field8, #field9"
      ).css("background-color", "pink");
    }
  });
});

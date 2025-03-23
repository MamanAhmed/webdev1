/*
one piece wanted poster effects
clicking any poster toggles it with fade effects
clicking luffy's poster triggers animation with easing and a callback
*/

$(document).ready(function () {
  // fade toggle for all posters on click
  $(".poster")
    .not("#luffy")
    .click(function () {
      $(this).fadeToggle(600);
    });

  // custom animation on luffy
  $("#luffy").click(function () {
    $(this).animate(
      {
        width: "250px",
        opacity: 0.5,
      },
      {
        duration: 1000,
        easing: "swing",
        complete: function () {
          console.log("Luffy's poster finished animating.");
          $(this).animate(
            {
              width: "200px",
              opacity: 1,
            },
            500
          );
        },
      }
    );
  });
});

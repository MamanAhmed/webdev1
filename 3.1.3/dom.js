/*
this program manages basketball player cards
you can add a player with the button and remove them with their own button
you can change a player's name by clicking and typing
hovering over a card highlights it while your mouse is on it
the current window width is shown at the bottom when you resize the page
pressing shift while typing in a name shows a message in the console
submitting the fake form at the top does nothing, it gets blocked
clicking once anywhere on the page prints a message in the console only one time
*/

$(document).ready(function () {
  const $footerInfo = $("#footerInfo");
  const $playerArea = $("#playerArea");

  // update footer with window width
  function updateFooter() {
    $footerInfo.text("window width: " + window.innerWidth + "px");
  }

  $(window).on("resize", updateFooter);
  updateFooter(); // initial call

  // add new player card on click
  $("#addPlayerBtn").on("click", function () {
    const $card = $(`
      <div class="player-card">
        <h2 contenteditable="true">New Player</h2>
        <p>Points: <span class="points">0</span></p>
        <button class="removeBtn">Remove</button>
      </div>
    `);
    $playerArea.append($card);
    setupCardEvents($card);
  });

  // set up card events
  function setupCardEvents($card) {
    const $name = $card.find("h2");
    const $removeBtn = $card.find(".removeBtn");

    // remove card
    $removeBtn.on("click", () => {
      $card.remove();
    });

    // highlight on hover
    $card.on("mouseover", () => {
      $card.addClass("highlight");
    });

    $card.on("mouseout", () => {
      $card.removeClass("highlight");
    });

    // log focus
    $name.on("focus", () => {
      console.log("editing name...");
    });

    $name.on("blur", () => {
      console.log("name changed to: " + $name.text());
    });

    // detect shift key
    $name.on("keydown", (event) => {
      if (event.shiftKey) {
        console.log("shift key pressed: key=" + event.key);
      }
    });
  }

  // block form submit
  $("#dummyForm").on("submit", function (e) {
    e.preventDefault();
    console.log("form submission prevented");
  });

  // one-time click logger
  function logOnce() {
    console.log("clicked once and removed");
    $(document).off("click", logOnce);
  }

  $(document).on("click", logOnce);
});

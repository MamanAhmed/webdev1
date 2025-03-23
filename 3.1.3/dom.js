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

const addBtn = document.getElementById("addPlayerBtn");
const playerArea = document.getElementById("playerArea");
const footerInfo = document.getElementById("footerInfo");

// update footer with window width
window.addEventListener("resize", () => {
  footerInfo.textContent = "window width: " + window.innerWidth + "px";
});

// add new player card on click
addBtn.addEventListener("click", () => {
  const card = document.createElement("div");
  card.className = "player-card";
  card.innerHTML = `
    <h2 contenteditable="true">New Player</h2>
    <p>Points: <span class="points">0</span></p>
    <button class="removeBtn">Remove</button>
  `;
  playerArea.appendChild(card);
  addCardEvents(card);
});

// set up card events
function addCardEvents(card) {
  const name = card.querySelector("h2");
  const removeBtn = card.querySelector(".removeBtn");

  removeBtn.addEventListener("click", () => {
    card.remove();
  });

  card.addEventListener("mouseover", () => {
    card.classList.add("highlight");
  });

  card.addEventListener("mouseout", () => {
    card.classList.remove("highlight");
  });

  name.addEventListener("focus", () => {
    console.log("editing name...");
  });

  name.addEventListener("blur", () => {
    console.log("name changed to: " + name.textContent);
  });

  name.addEventListener("keydown", (event) => {
    if (event.shiftKey) {
      console.log("shift key pressed: key=" + event.key);
    }
  });
}

// cancel form submit
document.getElementById("dummyForm").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("form submission prevented");
});

// log once then remove listener
function logOnce() {
  console.log("clicked once and removed");
  document.removeEventListener("click", logOnce);
}
document.addEventListener("click", logOnce);

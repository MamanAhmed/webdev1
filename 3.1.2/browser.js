/*
this program simulates a live basketball match
it asks for your favorite team and if you want to start the match
if you start, the score updates every second and stops after ten seconds
a new window opens showing match stats and closes automatically after five seconds
you can cancel the auto-close by clicking a button
*/

const output = document.getElementById("output");
const cancelBtn = document.getElementById("cancel");

// ask for team and confirm start
const teamName = prompt("enter your favorite team:");
if (!teamName) {
  output.innerHTML = "no team selected. match cancelled.";
  cancelBtn.style.display = "none";
  throw new Error("user cancelled team input");
}

const startMatch = confirm("start the match?");
if (!startMatch) {
  output.innerHTML = "match not started.";
  cancelBtn.style.display = "none";
  throw new Error("user cancelled match start");
}

alert("match started!");

// start simulation
let home = 0;
let away = 0;
const rivals = "Rivals";

// open popup
const statWindow = window.open("", "", "width=400,height=300");
statWindow.document.write("<p>loading match stats...</p>");

// update score every second
const interval = setInterval(() => {
  home += Math.floor(Math.random() * 3);
  away += Math.floor(Math.random() * 3);
  output.innerHTML = `<strong>${teamName}</strong>: ${home} | ${rivals}: ${away}`;
}, 1000);

// stop after 10s and update popup
const timeout = setTimeout(() => {
  clearInterval(interval);
  output.innerHTML += "<p>match simulation ended.</p>";
  statWindow.document.body.innerHTML = `
    <h2>Final Match Stats</h2>
    <p>${teamName}: ${home}</p>
    <p>${rivals}: ${away}</p>
  `;
}, 10000);

// auto-close popup after 5s
const closeTimer = setTimeout(() => {
  statWindow.close();
}, 5000);

// cancel auto-close if clicked
cancelBtn.addEventListener("click", () => {
  clearTimeout(closeTimer);
  output.innerHTML += "<p>auto-close cancelled.</p>";
});

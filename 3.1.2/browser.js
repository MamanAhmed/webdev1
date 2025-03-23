/*
this program simulates a live basketball match
it asks for your favorite team and if you want to start the match
if you start, the score updates every second and stops after ten seconds
a new window opens showing match stats and closes automatically after five seconds
you can cancel the auto-close by clicking a button
*/

$(document).ready(function () {
  const $output = $("#output");
  const $cancelBtn = $("#cancel");

  // ask user for team name using prompt()
  const teamName = prompt("enter your favorite team:");
  if (!teamName) {
    $output.html("no team selected. match cancelled.");
    $cancelBtn.hide();
    throw new Error("user cancelled team input");
  }

  // confirm before starting
  const startMatch = confirm("start the match?");
  if (!startMatch) {
    $output.html("match not started.");
    $cancelBtn.hide();
    throw new Error("user cancelled match start");
  }

  alert("match started!");

  // open a new popup window for stats
  const statWindow = window.open("", "", "width=400,height=300");
  statWindow.document.write("<p>loading match stats...</p>");

  // setup variables
  let home = 0;
  let away = 0;
  const rivals = "Rivals";

  // update score every second
  const interval = setInterval(() => {
    home += Math.floor(Math.random() * 3);
    away += Math.floor(Math.random() * 3);
    $output.html("<strong>" + teamName + "</strong>: " + home + " | " + rivals + ": " + away);
  }, 1000);

  // stop match after 10 seconds and show results in popup
  const timeout = setTimeout(() => {
    clearInterval(interval);
    $output.append("<p>match simulation ended.</p>");
    statWindow.document.body.innerHTML =
      "<h2>Final Match Stats</h2>" +
      "<p>" + teamName + ": " + home + "</p>" +
      "<p>" + rivals + ": " + away + "</p>";
  }, 10000);

  // schedule auto-close for popup
  const closeTimer = setTimeout(() => {
    statWindow.close();
  }, 5000);

  // allow user to cancel auto-close
  $cancelBtn.on("click", () => {
    clearTimeout(closeTimer);
    $output.append("<p>auto-close cancelled.</p>");
  });
});

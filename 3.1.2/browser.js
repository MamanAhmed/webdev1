// get user inputs
const team = prompt("what is your favorite basketball team?");
const proceed = confirm("do you want to start the live match simulation?");

const output = document.getElementById("output");

// checking user input
if (proceed) {
  alert("great! starting match simulation for " + team + "...");

  let homeScore = 0;
  let awayScore = 0;

  // update the score every second, using math.random()
  const intervalId = setInterval(() => {
    homeScore += Math.floor(Math.random() * 3);
    awayScore += Math.floor(Math.random() * 3);
    output.innerHTML =
      "<p><strong>" +
      team +
      "</strong>: " +
      homeScore +
      " | Rivals: " +
      awayScore +
      "</p>";
  }, 1000);

  // stop the score updates after 10 seconds
  setTimeout(() => {
    clearInterval(intervalId);
    output.innerHTML += "<p>⏱ match simulation ended.</p>";
  }, 10000);

  // open a new window to show match stats
  const statsWindow = window.open("", "MatchStats", "width=300,height=200");
  statsWindow.document.body.innerHTML = "<p>loading match stats...</p>";

  // close the new window after 5 seconds unless canceled
  const closeTimer = setTimeout(() => {
    statsWindow.close();
  }, 5000);

  // let user cancel the auto-close
  const cancelButton = document.getElementById("cancelButton");
  cancelButton.addEventListener("click", () => {
    clearTimeout(closeTimer);
    output.innerHTML += "<p>auto-close cancelled.</p>";
  });
} else {
  alert("okay, maybe next time!");
}

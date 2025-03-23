// connects to the <div id="output"> in the html file
const output = document.getElementById("output");

// use two arrays: one for player names and one for their points
const players = ["Kebron James", "Nichael Jordan", "Barry Bird"];
const points = [32, 21, 27];

output.innerHTML += "<h2>Top Scorers:</h2>";
players.forEach((player, i) => {
  // loop through both arrays and show player name and their points
  output.innerHTML += `<p>${player}: ${points[i]} pts</p>`;
});

// check if a team is undefeated and show that status
const undefeated = true;
output.innerHTML += `<p><strong>Undefeated this season:</strong> ${
  undefeated ? "Yes" : "No"
}</p>`;

// use date objects to show today’s date and how many days have passed since the season started
const gameDate = new Date();
const seasonStart = new Date("2025-01-15");

// calculate how many full days have passed between today and season start
const daysSinceStart = Math.floor(
  (gameDate - seasonStart) / (1000 * 60 * 60 * 24)
);

output.innerHTML += `<p><strong>Today's Game:</strong> ${gameDate.toDateString()}</p>`;
output.innerHTML += `<p><strong>Days since season start:</strong> ${daysSinceStart} days</p>`;

// use math object to calculate the average number of points scored
const total = points.reduce((acc, val) => acc + val, 0);
const avg = Math.round((total / points.length) * 10) / 10;

output.innerHTML += `<p><strong>Average Points:</strong> ${avg}</p>`;

// convert a string into a number using Number()
const jersey = Number("23");

output.innerHTML += `<p><strong>Jersey Number:</strong> ${jersey}</p>`;

// store a team name as a string and show it in all capital letters
const teamName = "Los Santos Bakers";

output.innerHTML += `<p><strong>Team Name:</strong> ${teamName.toUpperCase()}</p>`;

// check if a user’s jersey input is a valid number between 0–99
const jerseyPattern = /^\d{1,2}$/;
const userInput = "23";
const isValid = jerseyPattern.test(userInput);

output.innerHTML += `<p><strong>Jersey Format Valid:</strong> ${
  isValid ? "Yes" : "No"
}</p>`;

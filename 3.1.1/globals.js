const output = document.getElementById("output");

// array
const players = ["Kebron James", "Nichael Jordan", "Barry Bird"];
const points = [32, 21, 27];
output.innerHTML += "<h2>Top Scorers:</h2>";
players.forEach((player, i) => {
  output.innerHTML += `<p>${player}: ${points[i]} pts</p>`;
});

// boolean
const undefeated = true;
output.innerHTML += `<p><strong>Undefeated this season:</strong> ${
  undefeated ? "Yes" : "No"
}</p>`;

// date
const gameDate = new Date();
const seasonStart = new Date("2025-01-15");
const daysSinceStart = Math.floor(
  (gameDate - seasonStart) / (1000 * 60 * 60 * 24)
);
output.innerHTML += `<p><strong>Today's Game:</strong> ${gameDate.toDateString()}</p>`;
output.innerHTML += `<p><strong>Days since season start:</strong> ${daysSinceStart} days</p>`;

// math
const total = points.reduce((acc, val) => acc + val, 0);
const avg = Math.round((total / points.length) * 10) / 10;
output.innerHTML += `<p><strong>Average Points:</strong> ${avg}</p>`;

// number
const jersey = Number("23");
output.innerHTML += `<p><strong>Jersey Number:</strong> ${jersey}</p>`;

// string
const teamName = "Los Santos Bakers";
output.innerHTML += `<p><strong>Team Name:</strong> ${teamName.toUpperCase()}</p>`;

// regexp
const jerseyPattern = /^\d{1,2}$/;
const userInput = "23";
const isValid = jerseyPattern.test(userInput);
output.innerHTML += `<p><strong>Jersey Format Valid:</strong> ${
  isValid ? "Yes" : "No"
}</p>`;

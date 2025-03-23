/*
live bounty calculator
sends two bounty values to a PHP script using XMLHttpRequest
receives the sum as response and displays it without reloading
*/

document.getElementById("bountyForm").addEventListener("submit", function (e) {
  // stop the form from performing a normal page reload
  e.preventDefault();

  // get the values the user typed in for each bounty input field
  const bounty1 = document.getElementById("bounty1").value;
  const bounty2 = document.getElementById("bounty2").value;

  // build the URL to send to the server with both values as query parameters
  const url =
    "https://people.dsv.su.se/~pierre/i/05_ass/ip3/3/3.4/3.4.3/example.php" +
    "?number1=" +
    encodeURIComponent(bounty1) +
    "&number2=" +
    encodeURIComponent(bounty2);

  // create a new AJAX request
  const xhr = new XMLHttpRequest();

  // configure the request to use GET method
  xhr.open("GET", url, true);

  // define what happens when the server responds
  xhr.onload = function () {
    if (xhr.status === 200) {
      // if the response was successful, display the result
      const total = xhr.responseText;

      // format number with commas and update the page
      document.getElementById("result").innerHTML =
        "💰 Total combined bounty: <strong>" +
        Number(total).toLocaleString() +
        " Berries</strong>";
    } else {
      // show error if something went wrong with the request
      document.getElementById("result").innerHTML =
        "Error: Unable to calculate bounty total.";
    }
  };

  // handle any network error
  xhr.onerror = function () {
    document.getElementById("result").innerHTML =
      "Network error. Please try again.";
  };

  // send the request to the server
  xhr.send();
});

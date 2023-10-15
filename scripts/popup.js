document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the button by its ID
  const myButton = document.getElementById("myButton");

  // Define the URL you want to link to
  const websiteURL = "https://leetcode.com";

  // Add a click event listener to the button
  myButton.addEventListener("click", function () {
    // Open the website in a new tab
    chrome.tabs.create({ url: websiteURL });
  });
});

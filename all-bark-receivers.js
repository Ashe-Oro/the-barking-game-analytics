// If using Node.js version 17 or earlier, import node-fetch
// Uncomment the line below if you need to install node-fetch (if using Node.js < 18)
// const fetch = require('node-fetch');

// URL to fetch the JSON data
const url = 'https://sure-angeline-piotrswierzy-b061c303.koyeb.app/barking-power/leaderboard/1000';

// Function to fetch and process the data
async function fetchAndProcessData() {
  try {
    // Fetch the JSON data from the endpoint
    const response = await fetch(url);
    const data = await response.json();

    // Filter the data to only include objects with barksReceived > 0
    const twitterHandles = data
      .filter(item => item.barksReceived > 0)  // Filter for barksReceived > 0
      .map(item => item.twitterHandle);  // Extract twitterHandle values

    // Count the twitter handles
    const handleCount = twitterHandles.length;

    // Log the results
    console.log("Twitter Handles:", twitterHandles);
    console.log("Total Twitter Handles with barksReceived > 0:", handleCount);
  } catch (error) {
    console.error('Error fetching or processing data:', error);
  }
}

// Call the function to fetch and process the data
fetchAndProcessData();

// If using Node.js version 17 or earlier, import node-fetch
// Uncomment the line below if you need to install node-fetch (if using Node.js < 18)
// const fetch = require('node-fetch');

// Base API URL
const baseURL = 'https://mainnet-public.mirrornode.hedera.com/api/v1/tokens/0.0.5022567/balances?limit=100&order=desc';

// Function to fetch the token balances
async function fetchBalances(url) {
  let totalAccounts = 0;
  let nextURL = url;

  // Continue fetching until there's no 'next' link
  while (nextURL) {
    try {
      // Fetch the data from the current URL
      const response = await fetch(nextURL);
      const data = await response.json();

      // Count the number of accounts in the current response
      totalAccounts += data.balances.length;

      // Log the current count of accounts
      console.log(`Fetched ${data.balances.length} accounts, Total so far: ${totalAccounts}`);

      // Check if there is a 'next' link for pagination
      nextURL = data.links && data.links.next ? `https://mainnet-public.mirrornode.hedera.com${data.links.next}` : null;

    } catch (error) {
      console.error('Error fetching data:', error);
      break;
    }
  }

  // Final count of accounts
  console.log(`Total number of accounts: ${totalAccounts}`);
}

// Call the function to start fetching and counting
fetchBalances(baseURL);

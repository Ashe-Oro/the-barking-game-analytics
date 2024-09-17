# The Barking Game Analytics

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

## Introduction

**The Barking Game Analytics** is a comprehensive tool designed to quantify the adoption and impact of The Barking Game within the Hedera ecosystem. It specifically focuses on the **HBARk** token (Token ID: **0.0.5022567**), leveraging both the Hedera Mirror Node API and custom APIs to track "barking" activities on Twitter. This provides a clear picture of how users are participating and the level of their involvement in The Barking Game.

This tool analyzes the depth of engagement from bark givers (those who have barked on Twitter) and bark receivers (those who have received barks), enabling insights into the overall stickiness and positive effects of the game on the HBAR ecosystem.

## Why This Matters

- **Adoption**: Measure how many users are engaging with The Barking Game by barking on Twitter or being barked at.
- **Participation Level**: Quantify the level of user involvement, such as how much they’ve barked or been barked at, rather than just tracking frequency.
- **Positive Effect**: Demonstrate the broader impact of The Barking Game on Hedera by analyzing community engagement and token-related activity, showcasing its role in driving social interaction within the ecosystem.

These metrics help provide a clearer understanding of The Barking Game’s influence, its growth, and how it drives participation in Hedera's broader community.

## Features

- **Quantify Adoption**: Track how many accounts have participated in The Barking Game as bark givers or receivers using the **HBARk** token (Token ID: **0.0.5022567**).
- **Measure Participation Level**: Assess the level at which users are engaging, including how many barks they’ve given or received.
- **Token Balance Analysis**: Retrieve and analyze token balances of accounts that are actively participating in The Barking Game with the **HBARk** token.
- **Bark Givers and Receivers Tracking**: Use custom APIs to track which accounts have actively barked and which have received barks, giving a detailed view of user engagement.
- **Pagination Support**: Automatically paginate through large datasets to ensure comprehensive data collection.
- **Real-time Insights**: Continuously provide up-to-date data on the current state of The Barking Game and its influence on the Hedera ecosystem.

## Installation

To set up **The Barking Game Analytics**, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Ashe-Oro/the-barking-game-analytics.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd the-barking-game-analytics
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **(Optional)** If using Node.js version earlier than 18, install `node-fetch`:

   ```bash
   npm install node-fetch
   ```

## Usage

To run the analytics scripts and gather insights into The Barking Game's adoption and participation levels, execute the following commands:

### Fetch Account Associations

Retrieve and analyze token associations for accounts involved in The Barking Game:

```bash
node accounts-associations.js
```

### Fetch All Bark Givers

Fetch data on all accounts that have given barks:

```bash
node all-bark-givers.js
```

### Fetch All Bark Receivers

Fetch data on all accounts that have received barks:

```bash
node all-bark-receivers.js
```

These scripts will initiate processes that:

- Fetch token balances and associations for accounts involved in The Barking Game using the **HBARk** token (Token ID: **0.0.5022567**).
- Track bark givers and receivers, analyzing the level of their participation.
- Output key metrics quantifying The Barking Game’s reach and influence.

### Example Output

```
Fetched 100 accounts with token associations, Total so far: 100
Fetched 50 bark givers, Total so far: 50
Fetched 200 bark receivers, Total so far: 200
Total accounts engaged in The Barking Game: 500
```

## Note on Configuration

These analytics scripts are preconfigured specifically for use with **The Barking Game** and the **$hbark** token (Token ID: **0.0.5022567**). The tools are designed to work out-of-the-box to analyze data pertinent to The Barking Game without the need for additional adjustments.

## Contributing

Contributions to **The Barking Game Analytics** are welcome! If you want to help enhance the tool, please submit a pull request with well-documented changes and clear explanations.

## License

This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.

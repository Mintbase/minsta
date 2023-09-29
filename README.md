# Minsta

This repository hosts the primary codebase for the [Minsta App](https://minsta.me), originally created and developed by [@microchipgnu](https://github.com/microchipgnu). 

All new Minsta instances should be derived from this repository.

## Demo

Check out the live demo here: [minsta demo](https://minsta-app.vercel.app/).

## One-Click Deploy

Deploy this project using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMintbase%2Fminsta)

## Getting Started

To start with this project:

1. Clone the repository.
2. If you don't have `pnpm` installed, run:

   ```bash
   npm install -g pnpm
   ```
   
3. Then, install the required dependencies:

     ```bash
     pnpm install
     ```

## Environment Variables

Refer to the **.env.example** file for the environment variables used in this project. 

If you don't set up a `.env` file or environment variables with your provider, the project will retrieve values from the following files:

1. For CSS generation during build: `generate-css.js`
2. For configuration variables: `src/constants.ts`
3. For fallback metadata and text values: `src/fallback.ts`

# SETUP
| Variable Name                      | Description                                          | Example Value                                       |
|-----------------------------------|------------------------------------------------------|-----------------------------------------------------|
| NEXT_PUBLIC_MINTING_CLOSED        | Indicates if minting is closed (true/false)         | false                                               |
| NEXT_PUBLIC_BASE_URL              | Base URL for the application                        | https://testnet.mintbase.xyz                        |
| NEXT_PUBLIC_MINTBASE_WALLET_URL   | URL for the Mintbase wallet                         | https://testnet.wallet.mintbase.xyz                |
| NEXT_PUBLIC_NFT_CONTRACT_ADDRESS   | NFT contract address                                 | minsta.mintspace2.testnet                          |
| NEXT_PUBLIC_PROXY_MINTER_CONTRACT_ADDRESS | Proxy minter contract address               | 1.minsta.mintbus.testnet                           |
| NEXT_PUBLIC_NETWORK                | Network identifier (e.g., testnet, mainnet)         | testnet                                             |
| NEXT_PUBLIC_APP_TITLE              | Title of the application                            | Minsta Mintbase                                     |

# META
| Variable Name                      | Description                                          | Example Value                                       |
|-----------------------------------|------------------------------------------------------|-----------------------------------------------------|
| NEXT_PUBLIC_META_DESCRIPTION      | Meta description for the application                | Share your best moments with Mintbase and Minsta!  |
| NEXT_PUBLIC_META_TITLE            | Meta title for the application                      | Mint moments on Mintbase                           |
| NEXT_PUBLIC_TWITTER               | Twitter share message with URL                      | Exploring%20unforgettable%20moments%20at%20%23Mintbase%20%40Mintbase%20%40NEARProtocol%20%23BOS%20%23NEAR%0aMint%20yours%20here%3A%20https%3A%2F%2Fminsta.mintbase.xyz |
| NEXT_PUBLIC_META_IMAGE            | Path to the meta image (thumbnail)                  | ./images/thumbnail.png                             |

# COLORS
| Variable Name                      | Description                                          | Example Value                                       |
|-----------------------------------|------------------------------------------------------|-----------------------------------------------------|
| COLOR_PRIMARY                      | Primary color                                       | F3F4F8                                              |
| COLOR_SECONDARY                    | Secondary color                                     | 000                                                 |
| COLOR_MAIN_BACKGROUND              | Main background color                               | FFFFFF                                              |
| COLOR_GRADONE                      | Gradient color 1                                    | 4472ad                                              |
| COLOR_GRADTWO                      | Gradient color 2                                    | 009dea                                              |
| COLOR_CARDONE                      | Card color 1                                       | E8EAF0                                              |
| COLOR_CARDTWO                      | Card color 2                                       | 049BE8                                              |
| COLOR_LINKCOLOR                    | Link color                                          | 4f58a3                                              |
| COLOR_ICON                         | Icon color                                          | 4B9CE3                                              |
| COLOR_CAMERA                       | Camera icon color                                  | FFFFFF                                              |
| COLOR_MODAL_TEXT                   | Modal text color                                   | 000000                                              |
| COLOR_LEADERBOARD_TEXT             | Leaderboard text color                             | 000000                                              |
| COLOR_HEADER_TEXT                  | Header text color                                  | 000000                                              |
| COLOR_MAIN_TEXT                    | Main text color                                    | 000000                                              |
| COLOR_FREE_USE_TEXT                | Free use text color                                | 0A7D6C                                              |
| COLOR_PRIMARY_BTN_TEXT             | Primary button text color                          | 000000                                              |
| COLOR_SECONDARY_BTN_TEXT           | Secondary button text color                        | 000000                                              |

# TEXTS
| Variable Name                      | Description                                          | Example Value                                       |
|-----------------------------------|------------------------------------------------------|-----------------------------------------------------|
| NEXT_PUBLIC_TEXT_PRIZE_1ST_VAL    | Value of the 1st prize                              | 10N                                                 |
| NEXT_PUBLIC_TEXT_PRIZE_2ND_VAL    | Value of the 2nd prize                              | 5N                                                  |
| NEXT_PUBLIC_TEXT_PRIZE_3RD_VAL    | Value of the 3rd prize                              | 5N                                                  |
| NEXT_PUBLIC_TEXT_PRIZE_1ST_TITLE  | Title of the 1st prize                              | Top 10 on the Leaderboard                          |
| NEXT_PUBLIC_TEXT_PRIZE_2ND_TITLE  | Title of the 2nd prize                              | Top 11-20 on the Leaderboard                       |
| NEXT_PUBLIC_TEXT_PRIZE_3RD_TITLE  | Title of the 3rd prize                              | Most liked tweet with the hashtag MINSTA           |
| NEXT_PUBLIC_TEXT_ABOUT_1ST        | First line of the about section                     | Take a picture at Mintbase                        |
| NEXT_PUBLIC_TEXT_ABOUT_2ND        | Second line of the about section                    | Upload and it will mint as an NFT                 |
| NEXT_PUBLIC_TEXT_ABOUT_3RD        | Third line of the about section                     | Climb up the Leaderboard by minting               |


## Local Development

To run the project locally, use:

  ```bash
  pnpm dev
  ```

## Updating Environment Variables

### Running Locally

If you're running your project locally, follow these steps to update your environment variables:

1. Save your changes in the `.env` file.
2. Run `pnpm dev` again to apply the updated environment variables.
3. Reload the page to reflect the changes.

### Deployed on Vercel

If you have deployed your project on Vercel, follow these steps to update your environment variables:

1. Log in to your Vercel account.
2. Navigate to the project settings for your deployed app.
3. Update the environment variables in the Vercel dashboard.
4. Trigger a redeployment of your app to apply the changes.

By following these steps, you can ensure that your project uses the updated environment variables.
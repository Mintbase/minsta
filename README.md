# Minsta
<img src="https://i.imgur.com/J85RM1o.png" alt="cover_image"  width="0" />



This repository hosts the primary codebase for the Minsta app.  

[![Demo](https://img.shields.io/badge/Demo-Visit%20Demo-brightgreen)](https://minsta-app.vercel.app/)
[![Deploy](https://img.shields.io/badge/Deploy-on%20Vercel-blue)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMintbase%2Fminsta&env=NEXT_PUBLIC_APP_TITLE,NEXT_PUBLIC_PROXY_MINTER_CONTRACT_ADDRESS,NEXT_PUBLIC_SHOW_REWARDS,NEXT_PUBLIC_NFT_CONTRACT_ADDRESS,NEXT_PUBLIC_NETWORK&envDescription=API%20Keys%20for%20Minsta%20Project&envLink=https%3A%2F%2Fgithub.com%2FMintbase%2Fminsta%2Ftree%2Fminsta-improvements%23environment-variables)

**Tooling:**

[![Use Case](https://img.shields.io/badge/Use%20Case-Minter-blue)](#)
[![Tools](https://img.shields.io/badge/Tools-@mintbase.js/react%2C@mintbase.js/storage%2CArweave%2CMintbase%20Wallet-blue)](#)
[![Framework](https://img.shields.io/badge/Framework-Next.js%2014-blue)](#)

**Author:**

[![Author](https://img.shields.io/twitter/follow/microchipgnu?style=social&logo=twitter)](https://twitter.com/microchipgnu)  [![Organization](https://img.shields.io/badge/Mintbase-blue)](https://www.mintbase.xyz)


## Project Walkthrough

This repository hosts the primary codebase for the [Minsta App](https://minsta.me), originally created and developed by [@microchipgnu](https://github.com/microchipgnu).

All new Minsta instances should be derived from this repository.  

[Video Tutorial on Setting up](https://www.loom.com/share/d5a038fb341c40be9ae131dd82f199a80)


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


### SETUP Envs ( mandatory Envs )

| ENV Variable                              | Type             | What it does?                                                                                                                                                                         | Mandatory |
|-------------------------------------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| NEXT_PUBLIC_APP_TITLE                     | string           | sets the Title of your deployed application                                                                                                                                           | YES       |
| NEXT_PUBLIC_NFT_CONTRACT_ADDRESS          | contract address | this is the near contract where you want to showcase the user mints                                                                                                                   | YES       |
| NEXT_PUBLIC_NETWORK                       | Near Network     | sets Wallet login to the desired near network. "testnet" \| "mainnet"                                                                                                                 | YES       |
| NEXT_PUBLIC_PROXY_MINTER_CONTRACT_ADDRESS | contract address | this is the contract address that will do proxy minting so any user on near could mint it. It should be added as a minter on your contract (same as NEXT_PUBLIC_NFT_CONTRACT_ADDRESS) | YES       |




### SETUP Envs (not mandatory)

| ENV Variable                       | Type             | What it does?                                                                                               | Mandatory |
|------------------------------------|------------------|-------------------------------------------------------------------------------------------------------------|-----------|
| REPLICATE_API_TOKEN                | api token        | adds replicate functionality that analyzes the image taken by the user and add title + description using AI | NO        |
| NEXT_PUBLIC_LEGACY_PROXY_ADDRESSES | contract address | a second proxy address in case first fail                                                                   | NO        |
| NEXT_PUBLIC_MINTBASE_WALLET_URL    | URL              | "https://testnet.wallet.mintbase.xyz" or "https://wallet.mintbase.xyz"                                      | NO        |
| NEXT_PUBLIC_SHOW_REWARDS           | boolean          | this is to opt for rewards modal and show users                                                             | NO        |
| NEXT_PUBLIC_MINTING_CLOSED         | boolean          | this is to close the dapp for new mints                                                                     | NO        |



### META Envs
| ENV Variable                 | Type    | What it does?                                   | Mandatory |
|------------------------------|---------|-------------------------------------------------|-----------|
| NEXT_PUBLIC_META_DESCRIPTION | string  | OG Meta description                             | NO        |
| NEXT_PUBLIC_META_TITLE       | string  | OG Meta Title                                   | NO        |
| NEXT_PUBLIC_TWITTER          | string  | The message to be shared on twitter share.      | NO        |



### Theming Envs

you need to pass hex colors as strings.

- COLOR_PRIMARY
- COLOR_SECONDARY
- COLOR_MAIN_BACKGROUND
- COLOR_GRADONE
- COLOR_GRADTWO
- COLOR_CARDONE
- COLOR_CARDTWO
- COLOR_LINKCOLOR
- COLOR_ICON
- COLOR_CAMERA
- COLOR_MODAL_TEXT
- COLOR_LEADERBOARD_TEXT
- COLOR_HEADER_TEXT
- COLOR_MAIN_TEXT
- COLOR_FREE_USE_TEXT
- COLOR_PRIMARY_BTN_TEXT
- COLOR_SECONDARY_BTN_TEXT



### Rewards Envs

- NEXT_PUBLIC_TEXT_PRIZE_1ST_VAL
- NEXT_PUBLIC_TEXT_PRIZE_2ND_VAL
- NEXT_PUBLIC_TEXT_PRIZE_3RD_VAL
- NEXT_PUBLIC_TEXT_PRIZE_1ST_TITLE
- NEXT_PUBLIC_TEXT_PRIZE_2ND_TITLE
- NEXT_PUBLIC_TEXT_PRIZE_3RD_TITLE



### Instruction Envs


- NEXT_PUBLIC_TEXT_ABOUT_1ST
- NEXT_PUBLIC_TEXT_ABOUT_2ND
- NEXT_PUBLIC_TEXT_ABOUT_3RD


Refer to the **.env.example** file for the environment variables used in this project.

If you don't set up a `.env` file or environment variables with your provider, the project will retrieve values from the following files:

1. For CSS generation during build: `generate-css.js`
2. For configuration variables: `src/constants.ts`
3. For fallback metadata and text values: `src/fallback.ts`

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



<img src="https://i.imgur.com/p4HS3Sq.png" alt="detail_image"  width="0" />

# Minsta
<img src="https://i.imgur.com/J85RM1o.png" alt="cover_image"  width="0" />

This repository hosts the primary codebase for the Minsta app.

[![Demo](https://img.shields.io/badge/Demo-Visit%20Demo-brightgreen)](https://minsta-app.vercel.app/)
[![Deploy](https://img.shields.io/badge/Deploy-on%20Vercel-blue)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMintbase%2FminstFsimple-token-drop)

**Tooling:**

[![Use Case](https://img.shields.io/badge/Use%20Case-Minter-blue)](#)
[![Tools](https://img.shields.io/badge/Tools-@mintbase.js/react%2C@mintbase.js/storage%2CArweave%2CMintbase%20Wallet-blue)](#)
[![Framework](https://img.shields.io/badge/Framework-Next.js%2014-blue)](#)

**Author:**

[![Author](https://img.shields.io/twitter/follow/microchipgnu?style=social&logo=twitter)](https://twitter.com/microchipgnu)  [![Organization](https://img.shields.io/badge/Mintbase-blue)](https://www.mintbase.xyz)


## Project Walkthrough

This repository hosts the primary codebase for the [Minsta App](https://minsta.me), originally created and developed by [@microchipgnu](https://github.com/microchipgnu). 

All new Minsta instances should be derived from this repository.

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

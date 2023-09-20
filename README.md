# Minsta

This repository hosts the primary codebase for the [Minsta App](https://minsta.me), originally created and developed by [@microchipgnu](https://github.com/microchipgnu). All new Minsta instances should be derived from this repository.

## Demo

Check out the live demo here: [minsta-main demo](https://minsta-main.vercel.app/).

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

Refer to the **.env.example** file for the environment variables used in this project. If you don't set up a `.env` file or environment variables with your provider, the project will retrieve values from the following files:

For CSS generation during build: `generate-css.js`
For configuration variables: `src/constants.ts`
For fallback metadata and text values: `src/fallback.ts`

## Environment Variables

To run the project locally, use:

  ```bash
  pnpm dev
  ```

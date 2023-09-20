
# minsta

this is the main project for minsta (https://minsta.me) app.

all new minsta instances should come from this repository.

## Demo
https://minsta-app.vercel.app/

## One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMintbase%2Fminsta)


### What we do here (why this repo exists):

- New features

- bug fixes

- debugs

- manual testing and QA

- stress tests

- MINTS :)


## Getting Started

  

clone the repo and:

if no pnpm do:

```bash

npm  install  -g  pnpm

```

```bash

pnpm  install

```

 
### env vars

check **.env.example** file with the env variables we use it.
if you dont setup a .env file or env variables at your provider, our project will get the values from 3 files:

to generate css at build:
```generate-css.js``` 

to setup config vars:
```src/constants.ts```

to fallback metadata and texts values:
```src/fallback.ts```


## running locally

now run

```bash

pnpm  dev

```

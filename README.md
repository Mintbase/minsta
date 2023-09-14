# minsta-main
	this is the main project for minsta (https://minsta.me) app.
	all new minsta instances should come from this repository.
###  What we do here (why this repo exists):
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
npm install -g pnpm
```
  
```bash
pnpm install 
```

### env vars

- ui:
	- add on .env.local:
 ```
 MINSTA_COLORS={"colors":{"primary":"F3F4F8","secondary":"000","gradOne":"4472ad","gradTwo":"009dea","cardOne":"E8EAF0","cardTwo":"049BE8","linkColor":"4f58a3","icon":"4B9CE3"}}
 ```
  
  want to add new color? we use tailwind, so you can add in 3 steps:
   ```
1.add to the env file on MINSTA_COLORS, an extra property under "colors"
2. generate-css.js and add the new prop on the :root css code (this code will generate a static css file on build time and add to root vars)
3. tailwind.config.ts: add the new color on the file, so you can use with classes like text-mycolor, bg-mycolor
4. use it on the JSX Elements =)
 ```


- config:
```
NEXT_PUBLIC_MINSTA_SETUP={"closed":"false","wallet":"https://testnet.wallet.mintbase.xyz","token":"minsta.mintspace2.testnet","contract":"1.minsta.mintbus.testnet","network":"testnet","title":"NEARAPAC"}
```
closed: if set to true will close the minting and hide the footer
wallet: wallet url
token: token address
contract: contract address
network: near network
title: app title


- texts:

```
NEXT_PUBLIC_MINSTA_TEXTS={"prizes":{"one":"10N","two":"5N","three":"5N","title_one":"Top 10 on the Leaderboard","title_two":"Top 11-20 on the Leaderboard","title_three":"Most liked tweet with the hashtag NEARAPAC"},"about":{"first":"Take a picture at NEAR APAC","sec":"Upload and it will mint as an NFT",  "third":"Climb up the Leaderboard by minting"}}
```

those are texts used on the modals.
on an ideal situation would be used on a cms or firebase and could be edited by marketing/content team.

but in the current format it can be edited on env vars no need to change the code on Next.js


- meta:
metadata for social networks and minted nfts share

```
NEXT_PUBLIC_MINSTA_META={"description":"Share your best moments on NEAR APAC and win prizes!","title":"Mint Moments on NEAR APAC","twitter":"Exploring%20unforgettable%20moments%20at%20%23NEARAPAC%20with%20%40NearVietnamHub%20%40Mintbase%20%40NEARProtocol%20%23BOS%20%23NEAR","image":"./images/APAC-thumbnail-1200x630.png"}
```
description: social card description
title: social card title
twitter: share text

## running
now run 
```bash
pnpm dev 
```
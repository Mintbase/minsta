// generate-css.js
const fs = require("fs");
const path = require("path");

const MINSTA_COLORS = {
  colors: {
    primary: "F3F4F8",
    secondary: "000",
    gradOne: "4472ad",
    gradTwo: "009dea",
    cardOne: "E8EAF0",
    cardTwo: "049BE8",
    linkColor: "4f58a3",
    icon: "4B9CE3",
  },
};

const config = process.env.MINSTA_COLORS!== undefined ? JSON.parse(process.env.MINSTA_COLORS) :  MINSTA_COLORS;
const css = `:root {
          --primary: #${config.colors.primary};
          --secondary: #${config.colors.secondary};
          --gradOne: #${config.colors.gradOne};
          --gradTwo: #${config.colors.gradTwo};
          --cardOne: #${config.colors.cardOne};
          --cardTwo: #${config.colors.cardTwo};
          --linkColor: #${config.colors.linkColor};
          --icon: #${config.colors.icon};
        }`;

const outputPath = path.resolve(__dirname, "src/style/global.css");

fs.writeFileSync(outputPath, css);

console.log(`CSS file generated at: ${outputPath}`);
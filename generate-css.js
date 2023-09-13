// generate-css.js
const fs = require("fs");
const path = require("path");

const config = JSON.parse(process.env.MINSTA_CONFIG);

const css = `:root {
          --primary: #${config.colors.primary};
          --secondary: #${config.colors.secondary};
          --gradOne: #${config.colors.gradOne};
          --gradTwo: #${config.colors.gradTwo};
          --cardOne: #${config.colors.cardOne};
          --cardTwo: #${config.colors.cardTwo};
          --linkColor: #${config.colors.linkColor};
        }`;

const outputPath = path.resolve(__dirname, "src/style/global.css");

fs.writeFileSync(outputPath, css);

console.log(`CSS file generated at: ${outputPath}`);
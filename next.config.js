/** @type {import('next').NextConfig} */

const execSync = require("child_process").execSync;

const nextConfig = {
  images: {
    domains: ["arweave.net", "image-cache-service-z3w7d7dnea-ew.a.run.app"],
  },

  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      config.plugins.push(
        new webpack.WatchIgnorePlugin({
          paths: [/.*/], // This tells webpack to not ignore any files. Modify to suit your needs.
        })
      );

      config.plugins.push(
        new webpack.HotModuleReplacementPlugin({
          multiStep: true,
        })
      );

      config.plugins.push({
        apply: (compiler) => {
          compiler.hooks.watchRun.tapAsync(
            "MyCustomScript",
            (compilation, callback) => {
              // Run your custom script
              execSync("node generate-css.js", { stdio: "inherit" });

              callback();
            }
          );
        },
      });
    }

    return config;
  },
};

module.exports = nextConfig;

/* eslint-disable @typescript-eslint/no-var-requires */
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { merge } = require("webpack-merge");

const common = require("./webpack.config.js");

exports = {};
for (const config of common) {
  exports = merge(exports, config);
}

module.exports = merge(exports, {
  mode: "development",

  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ],
});

console.log(module.exports);

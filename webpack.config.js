const path = require("path");

module.exports = {
  entry: { main: "./src/index.js" },
  mode: process.env.NODE_ENV ?? "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [{ loader: path.resolve(__dirname, "lightning-loader.js") }],
      },
    ],
  },
};

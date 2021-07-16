const htmlWebPackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

// ? MODULES
const jsModule = {
   test: /\.js$/i,
   exclude: /node_modules/,
   use: {
      loader: "babel-loader",
   },
};

const htmlModule = {
   test: /\.html$/i,
   use: [
      {
         loader: "html-loader",
         options: {
            minimize: true,
         },
      },
   ],
};

const cssMudule = {
   test: /\.css$/i,
   use: [
      {
         loader: miniCssExtractPlugin.loader,
         options: {
            publicPath: "./",
         },
      },
      "css-loader",
   ],
};

const fontMudule = {
   test: /\.(woff|woff2|eot|ttf|otf)$/i,
   use: ["file-loader?name=assets/[name].[ext]"],
};

// ? PLUGINS

const htmlPlugin = new htmlWebPackPlugin({
   template: "./src/index.html",
   filename: "./index.html",
   chunks: ["js"],
   hash: true,
});

const miniCssPlugin = new miniCssExtractPlugin();

// ! *********** modules expert -----------------
module.exports = {
   entry: {
      js: "./src/index.js",
   },
   output: {
      filename: "[name].[chunkhash].js",
   },
   module: {
      rules: [jsModule, htmlModule, cssMudule, fontMudule],
   },

   plugins: [htmlPlugin, miniCssPlugin],
};

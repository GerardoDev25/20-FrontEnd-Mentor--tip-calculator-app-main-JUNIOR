const htmlWebPackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
   entry: {
      js: "./src/index.js",
      react: "./src/index_react.js",
      ts: "./src/index_ts.js",
   },
   output: {
      filename: "[name].[chunkhash].js",
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/i,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
            },
         },

         {
            test: /\.tsx?$/i,
            exclude: /node_modules/,
            use: {
               loader: "ts-loader",
            },
         },

         {
            test: /\.html$/i,
            use: [
               {
                  loader: "html-loader",
                  options: {
                     minimize: true,
                  },
               },
            ],
         },

         {
            test: /\.css$/i,
            // use: [miniCssExtractPlugin.loader, "css-loader"],
            use: [
               {
                  loader: miniCssExtractPlugin.loader,
                  options: {
                     publicPath: "./",
                  },
               },
               "css-loader",
            ],
         },

         {
            test: /\.(jpe?g|png|gif|svg|webp)$/i,
            use: [
               "file-loader?name=assets/[name].[ext]",
               "image-webpack-loader",
            ],
         },

         {
            test: /\.(woff)$/i,
            use: ["file-loader?name=assets/[name].[ext]"],
         },
      ],
   },
   plugins: [
      // new htmlWebPackPlugin({
      //    template: "./src/index.html",
      //    filename: "./index.html",
      // }),
      new htmlWebPackPlugin({
         template: "./src/index.html",
         filename: "./index.html",
         chunks: ["js"],
         hash: true,
      }),
      new htmlWebPackPlugin({
         template: "./src/index.html",
         filename: "./react.html",
         chunks: ["react"],
         hash: true,
      }),
      new htmlWebPackPlugin({
         template: "./src/index.html",
         filename: "./ts.html",
         chunks: ["ts"],
         hash: true,
      }),

      new miniCssExtractPlugin(),
   ],
};

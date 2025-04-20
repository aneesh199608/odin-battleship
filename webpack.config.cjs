const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Change to 'production' for production builds
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Output bundle file
    clean: true, // Clean the output directory before emit
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Match only .js files explicitly
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // Explicitly point to the babelrc file
            configFile: path.resolve(__dirname, '.babelrc'), 
          },
        },
      },
      
      {
        test: /\.css$/i, // Apply this rule to .css files
        use: ['style-loader', 'css-loader'], // Inject CSS into the DOM
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Template HTML file
    }),
  ],
  devServer: {
    static: './dist', // Serve files from the 'dist' directory
    open: true, // Open the browser after server had been started
  },
  devtool: 'inline-source-map', // Enable source maps for easier debugging
};

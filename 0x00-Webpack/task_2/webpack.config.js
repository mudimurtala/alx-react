const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',  // Adjust this if you have multiple entries
  output: {
    filename: '[name].[contenthash].bundle.js',  // Use unique filenames
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

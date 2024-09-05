const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'development', // Change to development mode
  devServer: {
    static: {
        directory: path.join(__dirname, 'public'),
    },
    port: 8564,
    open: true,  // This opens the browser automatically
    hot: true,   // Enable hot module replacement
},
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(), // Clean the build folder
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devtool: 'inline-source-map', // Enable inline source mapping
};

module.exports = {
    // other configuration settings...
    module: {
        rules: [
            // other rules...
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/images',  // Adjust path as needed
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //This property defines where the application starts
  entry:'./src/index.js',
    
  //This property defines the file path and the file name which will be used for deploying the bundled file
  output:{
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  resolve :{
    extensions:['','.js','.jsx'],
    // extensionAlias: {
    //     '.js': ['.ts', '.js','.jsx'],
    //     '.mjs': ['.mts', '.mjs'],
    //   },
  },
    
  //Setup loaders
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        exclude: /node_modules$/,
        use: ["style-loader", "css-loader"],

      }
    ]
  },
    
  // Setup plugin to use a HTML file for serving bundled js files
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer:{
    port: 9000,
    open: true
  }
}
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '/client/index.jsx'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }, 
  mode: 'development', //Development: slower but bigger package, when need to deploy, change to production. It will be smaller but faster. 
};
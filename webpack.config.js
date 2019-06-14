var path = require('path');

module.exports = {
entry: './client/index.js',
output: {
  path: path.join(__dirname, 'client'),
  filename: 'bundle.js'
 },
    module: {
      rules: [
        { 
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015','react']
            }
        },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }
    ]
    }
  };
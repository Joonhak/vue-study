const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.vue'],
  },
  entry: {
    app: path.join(__dirname, 'main.js'),
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader',
    }, {
      test: /\.css$/,
      use: ['vue-style-loader', 'css-loader'],
    }],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist',
  },
};

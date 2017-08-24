const path = require('path');

const config = {
  entry: [
    './src/client',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: [
    function excludeDir(context, request, callback) {
      if (/.src\/server./.test(path.resolve(context, request))) {
        return callback(null, 'commonjs');
      }
      return callback();
    },
  ],
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
      {
        test: /\.css$/,
        use: 'css-loader',
      },
      {
        test: /\.(js|jsx)$/,
        loaders: 'babel-loader',
        exclude: /(node_modules)/,
      },
    ],
  },
  plugins: [
  ],
};

module.exports = config;

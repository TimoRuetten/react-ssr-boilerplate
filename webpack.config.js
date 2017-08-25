const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: {
    main: './src/client',
  },
  /*
  entry: [
    './src/client',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },*/
  devtool: 'inline-source-map',
  /*
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  */
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.css',
    ],
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
      /*
      {
        test: /\.css$/,
        use: 'css-loader',
      },
      */
      {
        test: /\.(js|jsx)$/,
        loaders: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: [
            {
              loader: 'css-loader',
              query: {
                localIdentName: '[hash:8]',
                modules: true,
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
    }),
  ],
};

module.exports = config;

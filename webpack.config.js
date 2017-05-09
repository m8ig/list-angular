const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './app/index.js',

  output: {
    filename: './js/app.js',
    path: path.resolve(__dirname, './docs'),
  },

  module: {
    rules: [

      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, './app/assets/js'),
        ],
        use: [
          {
            loader: 'angularjs-template-loader',
            options: {
              relativeTo: path.resolve(__dirname, './app/assets/js'),
            },
          },
        ],
      },

      {
        test: /\.html$/,
        use: ['raw-loader']
      },

      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, './app/assets/sass'),
        ],
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  'node_modules/bootstrap-sass/assets/stylesheets/',
                ],
                precision: 8,
                sourceMap: true,
              },
            },
          ],
        }),
      },

    ],
  },

  devtool: 'cheap-module-source-map',

  resolve: {
    extensions: ['.js', '.css', '.scss'],
  },

  devServer: {
    contentBase: path.join(__dirname, './docs'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './app/template.ejs',
      title: 'Scal',
    }),
    new ExtractTextPlugin('./css/app.css'),
    new CleanWebpackPlugin(['docs'], {
      root: __dirname,
      verbose: true,
      dry: false,
    }),
  ],
};

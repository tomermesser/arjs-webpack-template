// Webpack set up for a Single Page Application (SPA), which implies Client-Side Rendering (CSR).
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// path is Node.js native utility module. The path module provides utilities for working with file and directory paths.
// path.resolve(__dirname, 'dist') | __dirname = the current folder we are at, 'dist' = the place where we want to output the files.
const paths = require('./paths')

module.exports = {
  // Where webpack looks to start building the bundle.
  // The entry point of your application is a single JavaScript file: index.js
  entry: {
    index: paths.src + '/index.js',
  },

  // Where webpack outputs the assets and bundles (all generated files after build)
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'public',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'BRIO RING AI POSER',
      template: paths.src + '/index.html', // template file
      filename: 'index.html', // output file
      chunks: ['index'],
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files to older js versions.
      { test: /\.js$/, use: ['babel-loader'] },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'public/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'public/inline' },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
      public: paths.public,
    },
  },
}

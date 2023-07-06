const path = require('path')
// path is Node.js native utility module. The path module provides utilities for working with file and directory paths.
// path.resolve(__dirname, 'dist') | __dirname = the current folder we are at, 'dist' = the place where we want to output the files.

module.exports = {
  // Source files
  src: path.resolve(__dirname, '../src'),

  // Production build files
  build: path.resolve(__dirname, '../dist'),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, '../public'),

  // Certificate for https: cert
  certFile: path.resolve(__dirname, '../keys/cert.pem'),

  // Certificate for https: key
  keyFile: path.resolve(__dirname, '../keys/key.pem'),
}

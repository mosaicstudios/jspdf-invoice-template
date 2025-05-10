const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    library: {
      type: 'module', // ✅ Output as ES module
    },
    module: true, // ✅ Required for type: 'module'
    environment: {
      module: true, // ✅ Required to avoid polyfills for ESM
    },
  },
  experiments: {
    outputModule: true, // ✅ Enables ESM output
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};

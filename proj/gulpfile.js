var balm = require('balm');

balm.config = {
  static: true,
  roots: {
    source: '.'
  },
  paths: {
    source: {
      js: 'src'
    }
  },
  scripts: {
    entry: {
      index: './src/index.tsx'
    },
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ],
    extensions: ['.ts', '.tsx']
  }
};

balm.go();

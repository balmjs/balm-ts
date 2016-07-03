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
      common: ['react', 'react-dom'],
      index: './src/index.tsx'
    },
    vendors: ['common'],
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ],
    extensions: ['.ts', '.tsx']
  }
};

balm.go();

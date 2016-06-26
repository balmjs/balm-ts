var balm = require('balm');

balm.config = {
  static: true,
  roots: {
    source: '.'
  },
  paths: {
    source: {
      js: 'app'
    }
  },
  scripts: {
    entry: {
      'main': './app/main.ts'
    },
    loaders: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
    extensions: ['.ts', '.tsx']
  }
};

balm.go();

var balm = require('balm');

balm.config = {
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
      angular: ['@angular'],
      main: './app/main.ts'
    },
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ],
    extensions: ['.ts', '.tsx']
  },
  extras: {
    excludes: [
      '.browserslistrc',
      '*.json',
      '*.md',
      '*.lock',
      '.tmp',
      'gulpfile.js'
    ]
  },
  cache: true
};

balm.go();

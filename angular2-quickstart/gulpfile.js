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
  styles: {
    ext: 'css'
  },
  scripts: {
    entry: {
      angular: ['@angular/core', '@angular/platform-browser-dynamic'],
      main: './app/main.ts'
    },
    vendors: ['angular'],
    loaders: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
    extensions: ['.ts', '.tsx']
  }
};

balm.go();

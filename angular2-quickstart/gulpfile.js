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
      angular: ['@angular/core', '@angular/platform-browser-dynamic'],
      main: './app/main.ts'
    },
    vendors: ['angular'],
    loaders: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
    extensions: ['.ts', '.tsx']
  }
};

balm.go(function(mix) {
  mix.cssmin('./dist/css/main.css', './dist/css');
  mix.jsmin('./dist/js/vendor/polyfill.js', './dist/js/vendor');
});

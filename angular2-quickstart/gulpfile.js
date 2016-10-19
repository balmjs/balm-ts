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
      angular: [
        '@angular/platform-browser-dynamic',
        '@angular/core',
        '@angular/platform-browser'
      ],
      main: './app/main.ts'
    },
    vendors: ['angular'],
    loaders: [{
      test: /\.tsx?$/,
      loader: 'ts'
    }],
    extensions: ['.ts', '.tsx']
  }
};

balm.go(function(mix) {
  if (balm.config.production) {
    mix.cssmin('./dist/css/main.css', './dist/css');
    mix.jsmin('./dist/js/vendor/polyfill.js', './dist/js/vendor');
  }
});

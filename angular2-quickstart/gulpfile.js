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
    loaders: [{
      test: /\.tsx?$/,
      loader: 'ts'
    }],
    extensions: ['.ts', '.tsx']
  },
  extras: {
    excludes: ['*.json', '*.md', '*.lock', '.tmp', 'package.js']
  }
};

balm.go(function(mix) {
  if (balm.config.production) {
    mix.jsmin('dist/js/vendor/polyfill.js', 'dist/js/vendor', { suffix: '' });
  }
});

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
    excludes: ['*.json', '*.md', '*.lock', '.tmp', 'gulpfile.js']
  }
};

balm.go(function(mix) {
  if (balm.config.production) {
    mix.jsmin('dist/js/vendor/polyfill.js', 'dist/js/vendor', { suffix: '' });
  }
});

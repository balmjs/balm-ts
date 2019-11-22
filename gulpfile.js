const balm = require('balm');

balm.config = {
  roots: {
    source: 'app'
  },
  scripts: {
    entry: {
      lib: ['react', 'react-dom'],
      main: './app/scripts/index.tsx'
    }
  }
};

balm.go();

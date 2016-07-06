## ES6

```js
// tsconfig.json
{
  "compilerOptions": {
    "target": "es6"
  }
}

// gulpfile.js
var balm = require('balm');

balm.config = {
  ...
  scripts: {
    ...
    loaders: [
      // note that babel-loader is configured to run after ts-loader
      { test: /\.ts(x?)$/, loader: 'babel-loader!ts-loader' }
    ],
    extensions: ['.ts', '.tsx'],
    ...
  },
  ...
};
```

## ES5

```js
// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs"
  }
}

// gulpfile.js
var balm = require('balm');

balm.config = {
  ...
  scripts: {
    ...
    loaders: [
      // note that babel-loader is not required
      { test: /\.ts(x?)$/, loader: 'ts-loader' }
    ],
    extensions: ['.ts', '.tsx'],
    ...
  },
  ...
};
```

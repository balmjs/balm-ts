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

## Loading other resources and code splitting

Loading css and other resources is possible but you will need to make sure that you have defined the `require` function in a declaration file.

```js
// require.d.ts
declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

// tsconfig.json
{
  "compilerOptions": {},
  "files": [
    "require.d.ts"
  ]
}
```

[![NPM version](https://badge.fury.io/js/%40dizmo%2Ftypes-global.svg)](https://npmjs.org/package/@dizmo/types-global)
[![Build Status](https://travis-ci.org/dizmo/types-global.svg?branch=master)](https://travis-ci.org/dizmo/types-global)
[![Coverage Status](https://coveralls.io/repos/github/dizmo/types-global/badge.svg?branch=master)](https://coveralls.io/github/dizmo/types-global?branch=master)

# @dizmo/types-global
Library module.

## Usage
### Install
```sh
npm install @dizmo/types-global --save-dev
```
### Require
```javascript
let lib = require('@dizmo/types-global');
```
### Examples
```typescript
import Global from '@dizmo/types-global'
```
```typescript
declare const global: Global;
```
## Development
### Build
```sh
npm run build
```
#### without linting:
```sh
npm run -- build --no-lint
```
### Lint
```sh
npm run lint
```
#### with auto-fixing (for JavaScript and TypeScript):
```sh
npm run -- lint --fix
```
### Test
```sh
npm run test
```
#### without (re-)building:
```sh
npm run -- test --no-build
```
### Cover
```sh
npm run cover
```
#### without (re-)building:
```sh
npm run -- cover --no-build
```

## Copyright

 © 2018 [Hasan Karahan](https://github.com/hsk81)

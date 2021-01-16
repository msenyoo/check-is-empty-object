[![Build Status](https://travis-ci.org/msenyoo/number-formatter.svg?branch=master)](https://travis-ci.org/msenyoo/number-formatter.svg?branch=master) [![Issue Status](https://img.shields.io/github/issues/msenyoo/check-is-empty-object)](https://github.com/msenyoo/check-is-empty-object/issues) [![Build Status](https://img.shields.io/github/license/msenyoo/check-is-empty-object)](https://github.com/msenyoo/check-is-empty-object/blob/main/LICENSE)

# Check whether it is empty object

## Installation

    'npm install check-is-empty-object'

## Usage

```javascript
var isEmptyObj = require("check-is-empty-object");

// return true
isEmptyObj({});

// return false
isEmptyObj({city: "Sydney"});

// return false
isEmptyObj([]);

// return false
isEmptyObj("string");
```

## Tests

    'npm test'

[![Build Status](https://travis-ci.org/msenyoo/check-is-empty-object.svg?branch=master)](https://travis-ci.org/msenyoo/check-is-empty-object) [![Coverage Status](https://coveralls.io/repos/github/msenyoo/check-is-empty-object/badge.svg?branch=master)](https://coveralls.io/github/msenyoo/check-is-empty-object?branch=master)

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

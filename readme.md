# weighted-median

Calculate the [weighted median](https://en.wikipedia.org/wiki/Weighted_median).

## Installation

```shell
npm install weighted-median --save
yarn add weighted-median
```

## Usage / example

```js
const weightedMedian = require('weighted-median');

const median = weightedMedian([{ value: 1, weight: 1 }, { value: 2, weight: 2 }]);
```

`weightedMedian` is a method that takes an array with a `value` and `weight` property and returns a `Number` of the weighted median.

## License

MIT

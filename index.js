'use strict';

const weightedMedian = (rows, p = 0, n = rows.length) => {
  //base case for single element
  if (p + 1 === n) {
    return rows[p];
  }
};

module.exports = weightedMedian;

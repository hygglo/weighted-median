'use strict';

const weightedMedian = (rows, p = 0, r = rows.length - 1) => {
  //base case for single element
  if (p === r) {
    return rows[p];
  }

  // base case for two elements
  if (r - p === 1) {
    if (rows[p].weight === rows[r].weight) {
      return {
        value: (rows[p].value + rows[r].value) / 2,
        weight: 0,
      };
    }

    return rows[p].weight > rows[r].weight ? rows[p] : rows[r];
  }
};

module.exports = weightedMedian;

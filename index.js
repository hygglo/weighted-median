'use strict';

const weightedMedian = (rows, p = 0, r = rows.length - 1) => {
  //base case for single element
  if (p === r) {
    return rows[p].value;
  }

  // base case for two elements
  if (r - p === 1) {
    if (rows[p].weight === rows[r].weight) {
      return (rows[p].value + rows[r].value) / 2;
    }

    return rows[p].weight > rows[r].weight ? rows[p].value : rows[r].value;
  }
};

module.exports = weightedMedian;

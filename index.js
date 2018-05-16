// @ts-check
'use strict';

/**
 *
 * @param {Array<{ value: Number, weight: Number }>} unsortedRows
 * @returns {Number}
 */
const weightedMedian = (unsortedRows) => {
  // sort by value
  const rows = unsortedRows.sort((a, b) => a.value - b.value);

  const halfWeight = rows.reduce((sum, { weight }) => weight + sum, 0) / 2;
  let i = 0;
  let w = 0;

  // get the index (i) and total weight (w) of item just above half
  for (; w < halfWeight; ++i) {
    w = w + rows[i].weight;
  }

  // if it actually is exactly the half, we need to take the average
  if (w === halfWeight) {
    return (rows[i - 1].value + rows[i].value) / 2;
  }

  // otherwise we return the value
  return rows[i - 1].value;
};

module.exports = weightedMedian;

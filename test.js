'use strict';

const w = require('./');

describe('Weighted median', () => {
  test('works with single element', () => {
    expect(w([{ value: 1, weight: 1 }])).toEqual(1);
  });

  test('works with 2 elements', () => {
    expect(w([{ value: 1, weight: 1 }, { value: 2, weight: 1 }])).toEqual(1.5);
    expect(w([{ value: 1, weight: 2 }, { value: 2, weight: 1 }])).toEqual(1);
    expect(w([{ value: 1, weight: 1 }, { value: 2, weight: 2 }])).toEqual(2);
  });
});

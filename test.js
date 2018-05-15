'use strict';

const w = require('./');

describe('Weighted median', () => {
  test('works with single element', () => {
    expect(w([{ value: 1, weight: 1 }])).toEqual({ value: 1, weight: 1 });
  });

  test('works the same as normal median if all weights are the same', () => {
    expect(w([{ value: 1, weight: 1 }, { value: 2, weight: 1 }, { value: 3, weight: 1 }])).toEqual({
      value: 2,
      weight: 1,
    });
    expect(w([{ value: 1, weight: 1 }, { value: 2, weight: 1 }])).toEqual({
      value: 1.5,
      weight: 0,
    });
  });
});

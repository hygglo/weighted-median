'use strict';

const w = require('./');

describe('Weighted median', () => {
  test('works with single element', () => {
    expect(w([{ value: 1, weight: 1 }])).toEqual({ value: 1, weight: 1 });
  });

  test('works with 2 elements', () => {
    expect(w([{ value: 1, weight: 1 }, { value: 2, weight: 1 }])).toEqual({
      value: 1.5,
      weight: 0,
    });
    expect(w([{ value: 1, weight: 2 }, { value: 2, weight: 1 }])).toEqual({
      value: 1,
      weight: 2,
    });
    expect(w([{ value: 1, weight: 1 }, { value: 2, weight: 2 }])).toEqual({
      value: 2,
      weight: 2,
    });
  });
});

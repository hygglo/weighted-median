'use strict';

const w = require('./');

describe('Weighted median', () => {
  test('returns undefined with empty array', () => {
    expect(w([])).toBeUndefined();
  });

  test('works with single element', () => {
    expect(w([{ value: 1, weight: 1 }])).toEqual(1);
  });

  test('works with 2 elements', () => {
    expect(
      w([
        {
          value: 1,
          weight: 1,
        },
        {
          value: 2,
          weight: 1,
        },
      ]),
    ).toEqual(1.5);

    expect(
      w([
        {
          value: 2,
          weight: 1,
        },
        {
          value: 1,
          weight: 1,
        },
      ]),
    ).toEqual(1.5);

    expect(
      w([
        {
          value: 1,
          weight: 2,
        },
        {
          value: 2,
          weight: 1,
        },
      ]),
    ).toEqual(1);

    expect(
      w([
        {
          value: 1,
          weight: 1,
        },
        {
          value: 2,
          weight: 2,
        },
      ]),
    ).toEqual(2);
  });

  test('works with 3+ elements', () => {
    expect(
      w([
        {
          value: 1,
          weight: 1,
        },
        {
          value: 2,
          weight: 1,
        },
        {
          value: 3,
          weight: 1,
        },
      ]),
    ).toEqual(2);

    expect(
      w([
        {
          value: 1,
          weight: 1,
        },
        {
          value: 2,
          weight: 1,
        },
        {
          value: 3,
          weight: 2,
        },
      ]),
    ).toEqual(2.5);

    expect(
      w([
        {
          value: 1,
          weight: 1,
        },
        {
          value: 2,
          weight: 2,
        },
        {
          value: 3,
          weight: 1,
        },
        {
          value: 4,
          weight: 2,
        },
      ]),
    ).toEqual(2.5);

    expect(
      w([
        {
          value: 1,
          weight: 5,
        },
        {
          value: 2,
          weight: 2,
        },
        {
          value: 3,
          weight: 1,
        },
        {
          value: 4,
          weight: 2,
        },
      ]),
    ).toEqual(1.5);

    expect(
      w([
        {
          value: 1,
          weight: 6,
        },
        {
          value: 2,
          weight: 2,
        },
        {
          value: 3,
          weight: 1,
        },
        {
          value: 4,
          weight: 2,
        },
      ]),
    ).toEqual(1);
  });
});

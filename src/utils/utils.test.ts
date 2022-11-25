import { ratio } from './ratio'
import { round } from './round'

describe('the round function', () => {
  it('100.12345 to two places', () => expect(round(100.12345, 2)).toBe(100.12))
  it('100.29 to three places', () => expect(round(100.29, 1)).toBe(100.3))
  it('100.9 with no decimals arg', () => expect(round(100.9)).toBe(101))
})

describe('the ratio function', () => {
  it('width of 3 and height of 4', () =>
    expect(ratio({ width: 3, height: 4 })).toBe(0.75))
  it('width of 800 and height of 600', () =>
    expect(ratio({ width: 800, height: 600 })).toBe(1.33))
  it('width of 1 and height of 1', () =>
    expect(ratio({ width: 1, height: 1 })).toBe(1))
})

import { expect } from 'chai';
import reduce from '../src/reduce.js';

describe('reduce', () => {
  it('should sum up an array of numbers', () => { 
    const array = [1, 2, 3, 4];
    const predicate = (sum, n) => sum + n;
    const result = reduce(array, predicate, 0);
    expect(result).to.equal(10);
  });

  it('should handle an array of objects', () => {
    const array = [{ a: 1 }, { a: 2 }, { a: 3 }];
    const predicate = (sum, obj) => sum + obj.a;
    const result = reduce(array, predicate, 0);
    expect(result).to.equal(6);
  });

  it('should group object properties by value', () => {
    const value = { a: 1, b: 2, c: 1 };
    const predicate = (result, value, key) => {
      (result[value] || (result[value] = [])).push(key);
      return result;
    }
    const result = reduce(value, predicate, {});
    expect(result).to.deep.equal({ '1': ['a', 'c'], '2': ['b'] });
  });

  it('should use the first element as the accumulator if not provided', () => {
    const array = [1, 2, 3, 4];
    const predicate = (sum, n) => sum + n;
    const result = reduce(array, predicate);
    expect(result).to.equal(10);
  });

  it('should handle an empty array with an initial accumulator', () => {
    const array = [];
    const predicate = (sum, n) => sum + n;
    const result = reduce(array, predicate, 5);
    expect(result).to.equal(5);
  });

  it('should handle an empty array without an initial accumulator', () => {
    const array = [];
    const predicate = (sum, n) => sum + n;
    const result = reduce(array, predicate);
    expect(result).to.be.undefined;
  });

  it('should handle an empty object with an initial accumulator', () => {
    const value = {};
    const predicate = (sum, n) => sum + n;
    const result = reduce(value, predicate, 5);
    expect(result).to.equal(5);
  });

  it('should handle an empty object without an initial accumulator', () => {
    const value = {};
    const predicate = (sum, n) => sum + n;
    const result = reduce(value, predicate);
    expect(result).to.be.undefined;
  });
});
import { expect } from 'chai';
import map from '../src/map.js';
import reduce from '../src/reduce.js';

describe('map', () => {
  describe('iteration with square function', () => {
    function square(n) {
      return n * n;
    }

    it('should map values in array using iteratee function', () => {
      const result = map([4, 8], square);
      expect(result).to.deep.equal([16, 64]);
    });

    it('should return an empty array when input array is null', () => {
      const result = map(null, square);
      expect(result).to.deep.equal([]);
    });
  
    it('should return an empty array when input array is undefined', () => {
      const result = map(undefined, square);
      expect(result).to.deep.equal([]);
    });
  
    it('should handle an empty array', () => {
      const result = map([], square);
      expect(result).to.deep.equal([]);
    });
  })

  it('should pass the correct arguments to iteratee', () => {
    const array = [1, 2, 3];
    const iteratee = (value, index, arr) => {
      expect(value).to.equal(array[index]);
      expect(arr).to.equal(array);
      return value;
    };
    map(array, iteratee);
  });

  it('should handle non-numeric values', () => {
    function appendExclamation(str) {
      return str + '!';
    }
    const result = map(['hello', 'world'], appendExclamation);
    expect(result).to.deep.equal(['hello!', 'world!']);
  });

  it('should handle mixed data types', () => {
    function stringify(value) {
      return String(value);
    }
    const result = map([1, 'a', true, null], stringify);
    expect(result).to.deep.equal(['1', 'a', 'true', 'null']);
  });

  it('should handle nested arrays', () => {
    function sum(arr) {
      return reduce(arr, (acc, n) => acc + n, 0);
    }
    const result = map([[1, 2], [3, 4]], sum);
    expect(result).to.deep.equal([3, 7]);
  });

  it('should handle objects in array', () => {
    function getName(obj) {
      return obj.name;
    }
    const result = map([{ name: 'Alice' }, { name: 'Bob' }], getName);
    expect(result).to.deep.equal(['Alice', 'Bob']);
  });

  it('should handle array of functions', () => {
    function callFunc(func) {
      return func();
    }
    const result = map([() => 'a', () => 'b'], callFunc);
    expect(result).to.deep.equal(['a', 'b']);
  });
});
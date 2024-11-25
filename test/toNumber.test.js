import toNumber from '../src/toNumber.js';
import * as chai from 'chai';

const expect = chai.expect;

describe('toNumber', function () {
  it('should convert a number to a number', function () {
    const number = 3.2;
    expect(toNumber(number)).to.equal(number);
  });

  it('should convert a string number to a number', function () {
    const numString = '3.2';
    const number = 3.2;
    expect(toNumber(numString)).to.equal(number);
  });

  it('should convert Number.MIN_VALUE to a number', function () {
    const minValue = Number.MIN_VALUE;
    const number = 5e-324;
    expect(toNumber(minValue)).to.equal(number);
  });

  it('should convert Infinity to a number', function () {
    const inf = Infinity;
    expect(toNumber(inf)).to.equal(inf);
  });

  it('should return NaN for symbols', function () {
    const symbol = Symbol('symbol');
    expect(toNumber(symbol)).to.be.NaN;
  });

  describe('non-base 10 numbers', function () {
    it('should convert binary string to a number', function () {
      const binaryNumber = '0b101';
      const number = 5;
      expect(toNumber(binaryNumber)).to.equal(number);
    });
  
    it('should convert octal string to a number', function () {
      const octNumber = '0o10';
      const number = 8;
      expect(toNumber(octNumber)).to.equal(number);
    });
  
    it('should return NaN for bad hex strings', function () {
      const badHex = '-0x1';
      expect(toNumber(badHex)).to.be.NaN;
    });
  });

  describe('valueOf()', function () {
    it('should convert object with valueOf method to a number', function () {
      const value = 42;
      const obj = {
        valueOf: function() {
          return value;
        }
      };
      expect(toNumber(obj)).to.equal(value);
    });

    it('should convert object without valueOf method to a string and then to a number', function () {
      const value = '42';
      const valueNumber = 42;
      const obj = {
        toString: function() {
          return value;
        }
      };
      expect(toNumber(obj)).to.equal(valueNumber);
    });

    it('should return NaN for objects that cannot be converted to a number', function () {
      const obj = {
        toString: function() {
          return 'not a number';
        }
      };
      expect(toNumber(obj)).to.be.NaN;
    });
  })

  describe('objects', function () {
    it('should return NaN for empty object', function () {
      const obj = {};
      expect(toNumber(obj)).to.be.NaN;
    });

    it('should return NaN for undefined', function () {
      const value = undefined;
      expect(toNumber(value)).to.be.NaN;
    });
  });
});
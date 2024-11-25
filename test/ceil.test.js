import { expect } from 'chai';
import ceil from '../src/ceil.js';

describe('ceil', function() {
  describe('without precision', function() {
    it('should round up to the nearest integer', function() {
      const value = ceil(4.006);
      const result = 5;
      expect(value).to.deep.equal(result);
    });

    it('should return the same number if it is already an integer', function() {
      const value = ceil(5);
      const result = 5;
      expect(value).to.deep.equal(result);
    });

    it('should handle negative numbers correctly', function() {
      const value = ceil(-4.006);
      const result = -4;
      expect(value).to.deep.equal(result);
    });

    it('should handle maximum precision correctly', function() {
      const value = ceil(6040, 292);
      const result = 6040;
      expect(value).to.deep.equal(result);
    });

    it('should handle maximum value correctly', function() {
      const value = ceil(Number.MAX_VALUE);
      const result = Number.MAX_VALUE;
      expect(value).to.deep.equal(result);
    });

    it('should handle minimum value correctly', function() {
      const value = ceil(Number.MIN_VALUE);
      const result = 1;
      expect(value).to.deep.equal(result);
    });
  });

  describe('with precision', function() {
    it('should round up to the nearest integer with precision 2', function() {
      const value = ceil(6.004, 2);
      const result = 6.01;
      expect(value).to.deep.equal(result);
    });
  
    it('should round up to the nearest integer with negative precision', function() {
      const value = ceil(6040, -2);
      const result = 6100;
      expect(value).to.deep.equal(result);
    });

    it('should handle negative numbers with precision correctly', function() {
      const value = ceil(-6.004, 2);
      const result = -6;
      expect(value).to.deep.equal(result);
    });
  
    it('should handle negative numbers with negative precision correctly', function() {
      const value = ceil(-6040, -2);
      const result = -6000;
      expect(value).to.deep.equal(result);
    });
  });

  describe('with non-numeric input', function() {
    it('should return NaN for non-numeric input', function() {
      const value = ceil('a');
      expect(value).to.be.NaN;
    });
    it('should return NaN for objects', function() {
      const value = ceil({});
      expect(value).to.be.NaN;
    });
  });
});
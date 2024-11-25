import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js';

describe('isEmpty', function() {
  describe('undefined values', function() {
    it('should return true for null', function() {
      const result = isEmpty(null);
      expect(result).to.be.true;
    });

    it('should return true for undefined', function() {
      const result = isEmpty(undefined);
      expect(result).to.be.true;
    });
  });

  describe('non-array values', function() {
    it('should return true for true', function() {
      const result = isEmpty(true);
      expect(result).to.be.true;
    });

    it('should return true for false', function() {
      const result = isEmpty(false);
      expect(result).to.be.true;
    });

    it('should return true for 0', function() {
      const result = isEmpty(0);
      expect(result).to.be.true;
    });

    it('should return true for 1', function() {
      const result = isEmpty(1);
      expect(result).to.be.true;
    });
  });

  describe('objects', function() {
    it('should return true for an empty object', function() {
      const result = isEmpty({});
      expect(result).to.be.true;
    });
  
    it('should return false for a non-empty object', function() {
      const result = isEmpty({ 'a': 1 });
      expect(result).to.be.false;
    });

    it('should return true for an empty buffer', function() {
      const result = isEmpty(Buffer.alloc(0));
      expect(result).to.be.true;
    });
  
    it('should return false for a non-empty buffer', function() {
      const result = isEmpty(Buffer.alloc(1));
      expect(result).to.be.false;
    });
  
    it('should return true for an empty arguments object', function() {
      const result = isEmpty((function() { return arguments; })());
      expect(result).to.be.true;
    });
  
    it('should return false for a non-empty arguments object', function() {
      const result = isEmpty((function() { return arguments; })(1, 2, 3));
      expect(result).to.be.false;
    });
  });

  describe('array-like objects', function () { 
    it('should return true for an empty array', function() {
      const result = isEmpty([]);
      expect(result).to.be.true;
    });

    it('should return false for a non-empty array', function() {
      const result = isEmpty([1, 2, 3]);
      expect(result).to.be.false;
    });

    it('should return true for an empty Set', function() {
      const result = isEmpty(new Set());
      expect(result).to.be.true;
    });
  
    it('should return false for a non-empty Set', function() {
      const set = new Set();
      set.add(1);
      const result = isEmpty(set);
      expect(result).to.be.false;
    });

    it('should return true for an empty Map', function() {
      const result = isEmpty(new Map());
      expect(result).to.be.true;
    });
  
    it('should return false for a non-empty Map', function() {
      const map = new Map();
      map.set('a', 1);
      const result = isEmpty(map);
      expect(result).to.be.false;
    });
  });

  describe('strings', function() {
    it('should return false for an empty string', function() {
      const result = isEmpty('');
      expect(result).to.be.true;
    });

    it('should return false for a non-empty string', function() {
      const result = isEmpty('abc');
      expect(result).to.be.false;
    });
  });
});
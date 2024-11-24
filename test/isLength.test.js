import{ expect } from 'chai';
import isLength from '../src/isLength.js';


describe('isLength', function() {

    it('should be true when number is 0', function() {
        const value = 0;
        const result = isLength(value);
        expect(result).to.deep.equal(true);
    });

    it('should be true when value is 1', function() {
        const value = 1;
        const result = isLength(value);
        expect(result).to.deep.equal(true);
    });

    it('should be true when when value is 3', function() {
        const value = 3;
        const result = isLength(value);
        expect(result).to.deep.equal(true);
    });

    it('should be false when when value is -1', function() {
        const value = -1;
        const result = isLength(value);
        expect(result).to.deep.equal(false);
    });

    it('should be false when when value is 4.52', function() {
        const value = 4.52;
        const result = isLength(value);
        expect(result).to.deep.equal(false);
    });

    it('should be false when value is not a number', function() {
        const value = Number.MIN_VALUE;
        const result = isLength(value);
        expect(result).to.deep.equal(false);
    });

    it('should be false when value is infinity', function() {
        const value = Infinity;
        const result = isLength(value);
        expect(result).to.deep.equal(false);
    });

    it('should be false when value is number as a string', function() {
        const value = '3';
        const result = isLength(value);
        expect(result).to.deep.equal(false);
    });

    it('should be false when number is NaN', function() {
        const value = NaN;
        const result = isLength(value);
        expect(result).to.deep.equal(false);
    });

});
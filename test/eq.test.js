import{ expect } from 'chai';
import eq from '../src/eq.js';


describe('eq', function() {

    it('should be true when comparing object to itself', function() {
        const object = { 'a': 1 };
        const result = eq(object, object);
        expect(result).to.deep.equal(true);
    });

    it('should be false when comparing object to other', function() {
        const object = { 'a': 1 };
        const other = { 'a': 1 };
        const result = eq(object, other);
        expect(result).to.deep.equal(false);
    });

    it('should be true when comparing the same value', function() {
        const result = eq('a', 'a');
        expect(result).to.deep.equal(true);
    });

    it('should be false when object and other are not same type', function() {
        const object = 'a';
        const other = Object('a');
        const result = eq(object, other);
        expect(result).to.deep.equal(false);
    });

    it('should be false when object is something but other is NaN', function() {
        const object = { 'a': 1 };
        const other = NaN;
        const result = eq(object, other);
        expect(result).to.deep.equal(false);
    });

    it('should be true when object and other are NaN', function() {
        const object = NaN;
        const other = NaN;
        const result = eq(object, other);
        expect(result).to.deep.equal(true);
    });

});
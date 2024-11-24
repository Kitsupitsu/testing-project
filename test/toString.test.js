import{ expect } from 'chai';
import toString from '../src/toString.js';


describe('toString', function() {

    it('should be \'\' when input is null', function() {
        const input = null;
        const result = toString(input);
        expect(result).to.deep.equal('');
    });

    it('should be \'\' when input is  undefined', function() {
        const input = undefined;
        const result = toString(input);
        expect(result).to.deep.equal('');
    });

    it('should be \'-0\' when input is -0', function() {
        const input = -0;
        const result = toString(input);
        expect(result).to.deep.equal('-0');
    });

    it('should be \'0\' when input is 0', function() {
        const input = 0;
        const result = toString(input);
        expect(result).to.deep.equal('0');
    });

    it('should be \'1,2,3\' when input is [1, 2, 3]', function() {
        const input = [1, 2, 3];
        const result = toString(input);
        expect(result).to.deep.equal('1,2,3');
    });

    it('should be \'0.45\' when input is 0.45', function() {
        const input = 0.45;
        const result = toString(input);
        expect(result).to.deep.equal('0.45');
    });

    it('should be min value as a text \'5e-324\' when value is a constant, min value', function() {
        const value = Number.MIN_VALUE;
        const result = toString(value);
        expect(result).to.deep.equal('5e-324');
    });

    it('should be \'3\' when value is \'3\' as a string', function() {
        const value = '3';
        const result = toString(value);
        expect(result).to.deep.equal('3');
    });

});
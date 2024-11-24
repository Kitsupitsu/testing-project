import{ expect } from 'chai';
import capitalize from '../src/capitalize.js';


describe('capitalize', function() {

    it('should capitalize when input is FRED', function() {
        const input = 'FRED';
        const result = capitalize(input);
        expect(result).to.deep.equal('Fred');
    });

    it('should capitalize when input is fred', function() {
        const input = 'fred';
        const result = capitalize(input);
        expect(result).to.deep.equal('Fred');
    });

    it('should capitalize when input is Fred', function() {
        const input = 'Fred';
        const result = capitalize(input);
        expect(result).to.deep.equal('Fred');
    });

    it('should capitalize when input is fRED', function() {
        const input = 'fRED';
        const result = capitalize(input);
        expect(result).to.deep.equal('Fred');
    });

    it('should return empty when input is empty', function() {
        const input = '';
        const result = capitalize(input);
        expect(result).to.deep.equal('');
    });

    it('should return empty when input is null', function() {
        const input = null;
        const result = capitalize(input);
        expect(result).to.deep.equal('');
    });

    it('should return empty when input is undefined', function() {
        const input = undefined;
        const result = capitalize(input);
        expect(result).to.deep.equal('');
    });

    it('should return \'0123\' when input is \'0123\'', function() {
        const input = '0123';
        const result = capitalize(input);
        expect(result).to.deep.equal('0123');
    });

    it('should return \'123\' when input is 123', function() {
        const input = 123;
        const result = capitalize(input);
        expect(result).to.deep.equal('123');
    });

});
import{ expect } from 'chai';
import filter from '../src/filter.js';


describe('filter', function() {

    it('should filter nothing if predicate is true for all', function() {
        const array = [1, 3, 7, 4, 6, 5];
        const predicate = (value) => value >0;
        const result = filter(array, predicate);
        expect(result).to.deep.equal([1, 3, 7, 4, 6, 5]);
    });

    it('should filter numbers greater than 5', function() {
        const array = [1, 3, 7, 4, 6, 5];
        const predicate = (value) => value >5;
        const result = filter(array, predicate);
        expect(result).to.deep.equal([7, 6]);
    });

    it('should return an empty array if no numbers fulfill the predicate', function() {
        const array = [1, 3, 7, 4, 6, 5];
        const predicate = (value) => value >10;
        const result = filter(array, predicate);
        expect(result).to.deep.equal([]);
    });

    it('should return an empty array when the array is empty', function() {
        const array = [];
        const predicate = true;
        const result = filter(array, predicate);
        expect(result).to.deep.equal([]);
    });

    it('should return an empty array when the array is null or not defined', function() {
        const predicate = (value) => value >10;
        const result_null = filter(null, predicate);
        expect(result_null).to.deep.equal([]);
        const result_not_defined = filter(undefined, predicate);
        expect(result_not_defined).to.deep.equal([]);
    });

    it('should pass index and array as arguments to the predicate', () => {
        const array = [1, 3, 7, 4, 6, 5];
        const predicate = (value, index, array) => value === array[index];
        const result = filter(array, predicate);
        expect(result).to.deep.equal([1, 3, 7, 4, 6, 5]);
    });

    it('should filter objects based on a property value', () => {
        const users = [
            { user: 'barney', active: true },
            { user: 'fred',   active: false }
        ];
        const predicate = (user) => user.active;
        const result = filter(users, predicate);
        expect(result).to.deep.equal([{ user: 'barney', active: true }]);
    });

});
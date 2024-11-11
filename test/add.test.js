import add from '../src/add.js';
import assert from 'assert';
import * as chai from 'chai';


describe('test', function () {
  it('should pass', function () {
    return true;
  });
});

describe('add', function () {
  it('should return 5 when adding 2 and 3', function () {
    chai.expect(add(2, 3)).to.equal(5);
  });

  it('should return 0 when adding -1 and 1', function () {
    assert.equal(add(-1, 1), 0);
  });

  it('should return -3 when adding -1 and -2', function () {
    assert.equal(add(-1, -2), -3);
  });

  it('should return 10 when adding 6 and 4', function () {
    assert.equal(add(6, 4), 10);
  });

  it('should return 0 when adding 0 and 0', function () {
    assert.equal(add(0, 0), 0);
  });
});
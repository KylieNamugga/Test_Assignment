const assert = require('chai').assert;
const multiply = require('../multiply')

// This will carry all our unit tests
describe('Testing our multiplication',() =>{
    // It will cater for part of the unit test
    it('should multiply 1 and 1 to get 1', () => {
        assert.equal(multiply(1, 1), 1);
    });

    it('should multiply 2 and 2 to get 4', () => {
        assert.equal(multiply(2, 2), 4);
    });

    it('should multiply 3 and 3 to get 9', () => {
        assert.equal(multiply(3, 3), 9);
    });


})
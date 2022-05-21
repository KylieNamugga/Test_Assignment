const assert = require('chai').assert;
const multiply = require('../multiply')

// This will carry all our unit tests
describe('Testing our multiplication',() =>{
    // It will cater for part of the unit test
    it('should multiply 1 and 1 to get 1', () => {
        assert.equal(multiply(1, 1), 1);
    });

})
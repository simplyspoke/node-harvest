var assert = require('assert'), _isUndefined = require('../mixin');


describe('Mixins', function() {
    describe('isUndefined', function() {
        it('should return true if property is not defined', function() {
            assert.equal(true, _isUndefined({}, 'project_id'));
        });
    });
});

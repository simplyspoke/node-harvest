var _isUndefined;

module.exports = _isUndefined = function(obj) {
    var i;

    for (i = arguments.length - 1; i >= 1; i--) {
        if(!obj.hasOwnProperty(arguments[i])) {
            return true;
        }
    };
    return false;
};

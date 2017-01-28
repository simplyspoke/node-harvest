var mixins = {
  _isUndefined: _isUndefined
};

function _isUndefined(obj) {
  var i;

  for (i = arguments.length - 1; i >= 1; i--) {
    if (!obj.hasOwnProperty(arguments[i])) {
      return true;
    }
  }
  return false;
}

module.exports = mixins;

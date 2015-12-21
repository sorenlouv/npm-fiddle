var superagent = require('superagent');
var Q = require('Q');

superagent.Request.prototype.asPromise = function() {
  var _this = this;
  return Q.Promise(function(resolve, reject) {
    _this.end(function(err, res) {
      if (err) {
        reject(err);
      }

      resolve(res);
    });
  });
};

module.exports = {
  search: function(name) {
    return superagent
    .get('https://api.cdnjs.com/libraries')
    .query({search: name})
    .set('Accept', 'application/json')
    .asPromise();
  },
};

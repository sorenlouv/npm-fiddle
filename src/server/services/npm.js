var NpmKeyService = require('npm-keys');
var npmService = {};
var npmKeyService = new NpmKeyService();

npmService.search = function(query, options) {
    options = options || {};
    options.limit = options.limit || 20;
    var npmKeys = npmKeyService.get();

    var matches = npmKeys.filter(function(package) {
        return package.indexOf(query) === 0;
    });

    if (matches.length === 0) {
        matches = npmKeys.filter(function(package) {
            return package.indexOf(query) > 0;
        });
    }

    matches.sort(function(a, b) {
        return a.length - b.length;
    });

    matches = matches.slice(0, options.limit);
    return matches;
};

module.exports = npmService;

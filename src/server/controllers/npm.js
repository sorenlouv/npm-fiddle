var npmService = require('../services/npm');
var npmController = {};

npmController.search = function(req, res) {
	var query = req.query.query;
	var results = npmService.search(query);
	res.send(results);
};

module.exports = npmController;

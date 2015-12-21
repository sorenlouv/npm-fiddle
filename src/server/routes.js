var npmController = require('./controllers/npm');

module.exports = function(app) {
	app.get('/npm/keys/search/', npmController.search);
};

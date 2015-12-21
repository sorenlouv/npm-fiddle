var app = require('express')();
var PORT = 9090;
require('./routes')(app);

// Avoid crashing the node process by handling uncaught exceptions
process.on('uncaughtException', function(err) {
	console.error('Uncaught exception:', err, err.stack);
});

// Start app
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

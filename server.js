var connect = require('connect');
var logger = require('morgan');
var debug = require('debug')('my-application');
var serveStatic = require('serve-static');
var port = process.env.PORT || 3000;

// Middleware
var app = connect();
app.use(logger('dev'));
app.use(serveStatic(__dirname, {'index': 'index.html'}));

// Listen
app.listen(port, function(){
  console.log('Server listening on port ' + port);
  console.log('http://localhost:'+ port);
});

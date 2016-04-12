var ect = require('ect');
var ectRenderer = ect({ watch: true, root: __dirname + '/views', ext : '.ect' });
app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);
var routes = require('./routes');
app.use('/', routes);

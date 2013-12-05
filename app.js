
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    user = require('./routes/user'),
    umd = require('./routes/umd'),
    petri = require("./routes/petri"),
    http = require('http'),
    path = require('path'),
    // jshtmlExpress = require('jshtml-express'),
    exphbs  = require('express3-handlebars'),
    app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'public/views'));

// Add support for jshtml
// app.engine('jshtml', jshtmlExpress);
// app.set('view engine', 'jshtml');

// Add Handlebars support
hbs = exphbs.create({
    defaultLayout: 'main',
    
    // helpers      : helpers,
    
    

    // Uses multiple partials dirs, templates in "shared/templates/" are shared
    // with the client-side of the app (see below).
    partialsDir: [
        'shared/templates/',
        'public/views/partials/'
    ],
    
    // Cannot seem to override the default layouts directory
    layoutsDir: path.join(__dirname, 'public/views/layouts/')
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// app.enable('view cache');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
// app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/umd', umd.index);
app.get('/petri', petri.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

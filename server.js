var express 		= require('express')
,	Resource 		= require('express-resource') // /!\ avant express
,	app 			= express()
,	passport 		= require('passport')
,	config 			= require('./config/config')
,	flash 			= require('connect-flash')
,	favicon 		= require('static-favicon')
,	load 			= require('express-load')
,	cookieParser 	= require('cookie-parser')
,	bodyParser 		= require('body-parser')
,	session 		= require('express-session')
,	path 			= require('path')
,	methodOverride 	= require('method-override');


app.use(cookieParser());
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');


app.use(favicon(__dirname + '/app/favicon.ico'));
app.use(bodyParser());
app.use(session({secret: config.session_secret}));

app.use(methodOverride());
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

load('models', {cwd: 'app'})
	.then('controllers', {cwd: 'app'})
	.into(app);

load('routes', {cwd: 'config'})
	.into(app);


app.listen(config.port);
console.log('server listening on port : ' + config.port);
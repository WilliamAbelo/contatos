var express = require('express');
//var home = require('../routes/home');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function(){
var app = express();

//***variaveis de ambiente***

app.set('port', 3000);

//***middleware***

//middleware express.static
app.use(express.static('./public'));
app.set('view engine', 'html');
app.set('views', './app/public');

//middleware body-parser e method-override
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('method-override')());

//carregamento das rotas
load('models', {cwd: 'app'})
	.then('controllers')
	.then('routes')
	.into(app);

	
return app;
};
//entry point

var express = require('express');
var app = express();
const router = require('./routes/routes');

// set the view engine to ejs
app.set('view engine', 'ejs');

//carregando router no app
app.use("/", router);

//expondo a pasta public
app.use(express.static('public'))

app.listen(8080);
console.log('Server is listening on port 8080');
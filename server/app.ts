import express = require('express');
import path = require('path');
import index from './routes/index';

var port = process.env.PORT || 3000;
var app = express();

app.set('views', path.resolve('./server/views'));
app.set('view engine', 'jade');

app.use(express.static(path.resolve('./server/public')));
app.use('/', index);

app.listen(port);

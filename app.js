'use stirct';
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

require('./server/route.js')(app);

app.listen(3000, function() {
    console.log('Listening to port 3000');
});

exports = module.exports = app;

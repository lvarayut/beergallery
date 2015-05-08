'use strict';

var ctrl = require('./controller.js');

module.exports = function(app) {
    app.get('/', function(req, res){
        res.sendFile(__dirname + '/public/index.html');
    });

    app.get('/api/v1/beers', ctrl.getBeers);
    app.post('/api/v1/beer/create', ctrl.createBeer);
}

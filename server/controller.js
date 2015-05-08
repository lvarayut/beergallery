'use strict';

var mongoose = require('mongoose'),
    Beer = mongoose.model('Beer');

module.exports.getBeers = function(req, res) {
    Beer.find(function(err, beers) {
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        return res.json(beers);
    });
};

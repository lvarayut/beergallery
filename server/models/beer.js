'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Beer = new Schema({
    name: String,
    detail: String,
    imagePath: String,
    abv: Number,
    country: Schema.Types.Mixed
});

mongoose.model('Beer', Beer);
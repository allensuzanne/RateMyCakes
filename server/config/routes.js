const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');
const cake = require('../controllers/cakes.js');

module.exports = function(app){

    app.get('/cakes', function(req, res){
        cake.showAll(req, res);
    });

    app.get('/cakes/:id', function(req, res){
        cake.showOne(req, res);
    });

    app.post('/cakes', function(req, res){
        cake.create(req, res);
    });

    app.put('/cakes/:id', function(req, res){
        cake.createRating(req, res);
    });
    
}
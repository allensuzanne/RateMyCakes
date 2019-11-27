const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');

module.exports={

    showAll: function (req, res) {
        Cake.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },

    showOne: function (req, res) {
        const { id } = req.params;
        Cake.findOne({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    create: function(req, res){
        var newCake = new Cake(req.body);
        newCake.save()
            .then(data => res.json(data))
            .catch(err=> res.json(err));
    },

    createRating: function(req, res){
        const { id } = req.params;
        var cake = Cake.findOne({_id: id})
            .then(cake =>{
                console.log("found cake");
                cake.ratings.push(req.body);
                cake.save()
                .then(data => res.json(data))
                .catch(err=> res.json(err));
            })
            .catch(err=>res.json(err));
    }

}
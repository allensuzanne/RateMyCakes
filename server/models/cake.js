const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//----------create schema--------------------------------------------------
const cakeSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    image: {type: String, required: true, minlength: 5},
    avgRating: {type: Number, default: 0, max: 5},
    ratings: [
        {
            rating: {type: Number, required: true, max: 5},
            comment: {type: String, required: true, minlength: 5}
        }
    ]},
    { timestamps: true });

//----------create model--------------------------------------------------
const Cake = mongoose.model('Cake', cakeSchema);
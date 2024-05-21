const mongoose = require('mongoose');

const AddfoodSchema = new mongoose.Schema({
    foodname: {
        type: String,
        required: true
    }
});

const AddFood = mongoose.model('addfood', AddfoodSchema);

module.exports = AddFood;

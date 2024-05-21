const mongoose = require('mongoose');
// const { default: Subcategory } = require('../../Frontend/src/Layout/Subcategory');

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  foodtype: {
    type: String,
    enum: ['', 'veg', 'nonVeg'],
    default: 'veg',
    required: true
  },

  foodcategory: {
    type: String,
    required: true
  },  
  subcategorys:{
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  discount:{
    type:Number,
    require: true
  },
  foodimg: {
    type: String,
    required: true
  }
});

const Food = mongoose.model('Food', FoodSchema);

module.exports = Food;

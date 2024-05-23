const mongoose = require('mongoose');

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
    enum: ['veg', 'nonVeg'],
    default: 'veg',
    required: true
  },
  foodcategory: {
    type: String,
    required: true
  },
  subcategorys: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  foodimg: {
    type: String,
    required: true
  },
  customFields: [{
    cname: {
      type: String,
      required: true
    },
    cprice: {
      type: Number,
      required: true
    }
  }]
});

const Food = mongoose.model('Food', FoodSchema);

module.exports = Food;

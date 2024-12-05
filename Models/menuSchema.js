const mongoose = require('mongoose');

const menuItemsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type : Number,
        required: true
    },
    taste: {
        type : String,
        required: true,
        enum : ["sweet","spicy","sour"]
    },
    is_drink: {
        type: Boolean,
        required: true,
        default: false
    },
    ingredients: {
        type: [String],
        required: true,
        default: []
    }
});

const menu = mongoose.model('menu',menuItemsSchema);

module.exports = menu;
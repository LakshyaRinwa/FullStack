const mongoose = require("mongoose");
const menuSchema = mongoose.Schema({
    'dish' : String,
    'category' : String,
    'subCategory' : String,
    'price' : {
        type : Number,
        default : 50
    }
})

module.exports = mongoose.model('menuLists', menuSchema);

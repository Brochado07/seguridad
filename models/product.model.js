const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    phone: {type: Number, required: true},
    addres: {type: String, required: true},
    identification: {type: Number, required: true},
    zone: {type: Number}
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);

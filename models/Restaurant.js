const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps');
const Schema = mongoose.Schema;

const RestaurantSchema = Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
    },
    latitude: {
        type: String,
    },
    longitude: {
        type: String,
    },
    url: {
        type: String,
    }, 
    image: {
        type: String,
    },
    categorie: {
        type: String,
        ref: 'Categorie'
    }
    
});

RestaurantSchema.plugin(timestamps);

module.exports = mongoose.model('Restaurant', RestaurantSchema);
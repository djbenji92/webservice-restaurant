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
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }, 
    image: {
        type: String,
        required: true
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'Categorie'
    }
    
});

RestaurantSchema.plugin(timestamps);

module.exports = mongoose.model('Restaurant', RestaurantSchema);
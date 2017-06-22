const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps');
const Schema = mongoose.Schema;

const CategorieSchema = Schema({

    name: {
        type: String,
        required: true
    }
});

CategorieSchema.plugin(timestamps);

module.exports = mongoose.model('Categorie', CategorieSchema);
const mongoose = require('mongoose');
const Promise = require('bluebird');


module.exports = (server) => {
    server.mongoose = mongoose.connect(server.settings.db.url);
    server.mongoose.Promise = Promise;

    server.models = {
        Bot: require('./Bot'),
        Weapon: require('./Weapon'),
        Categorie: require('./Categorie'),
        Restaurant: require('./Restaurant'),
        User: require('./User')
    };
};
module.exports = (server) => {
    server.actions = {
        bots: require('./bots')(server),
        weapons: require('./weapons')(server),
        categories: require('./categories')(server),
        restaurants: require('./restaurants')(server),
        users: require('./users')(server),
        auth: require('./auth')(server)
    };
};
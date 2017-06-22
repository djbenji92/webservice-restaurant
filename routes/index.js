module.exports = (server) => {
    server.use(server.middlewares.logger);
    server.use(server.middlewares.res);

    server.use('/bots', require('./bots')(server));
    server.use('/weapons', require('./weapons')(server));
    server.use('/categories', require('./categories')(server));
    server.use('/restaurants', require('./restaurants')(server));
    server.use('/users', require('./users')(server));
    server.use('/auth', require('./auth')(server));
};
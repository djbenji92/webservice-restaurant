const router = require('express').Router();

module.exports = (server) => {

    router.post('/',
        server.middlewares.bodyParser.json(),
        server.middlewares.ensureBodyFields(server.models.Restaurant.schema),
        server.actions.restaurants.create
    );

    router.get('/',
        server.actions.restaurants.list
    );

    router.get('/:id',
        server.actions.restaurants.show
    );

    router.put('/:id',
        server.middlewares.bodyParser.json(),
        server.actions.restaurants.update
    );

    router.delete('/:id',
        server.actions.restaurants.remove
    );

    return router;
};
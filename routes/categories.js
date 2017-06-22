const router = require('express').Router();

module.exports = (server) => {

    router.post('/',
        server.middlewares.bodyParser.json(),
        server.middlewares.ensureBodyFields(server.models.Categorie.schema),
        server.actions.categories.create
    );

    router.get('/',
        server.actions.categories.list
    );

    router.get('/:id',
        server.actions.categories.show
    );

    router.put('/:id',
        server.middlewares.bodyParser.json(),
        server.actions.categories.update
    );

    router.delete('/:id',
        server.actions.categories.remove
    );

    return router;
};
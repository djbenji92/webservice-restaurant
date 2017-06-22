module.exports = (server) => {
    const Restaurant = server.models.Restaurant;

    return (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.setHeader('Access-Control-Allow-Credentials', true);
         new Restaurant(req.body)
             .save((err, instance) => {
                if (err)
                    return res.status(500).send(err);
                //res.status(201).send();
                res.send(instance);
             });

    };
};
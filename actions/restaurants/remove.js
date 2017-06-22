module.exports = (server) => {
    const Restaurant = server.models.Restaurant;

    return (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        Restaurant.findByIdAndRemove(req.params.id, (err, cat) => {
            if (err)
                return res.status(500).send(err);

            if (!cat)
                return res.status(404).send();

            res.status(204).send();

            
        })
    }
};

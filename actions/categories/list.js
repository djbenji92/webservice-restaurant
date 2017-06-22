module.exports = (server) => {
    const Categorie = server.models.Categorie;

    return (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        
        Categorie.find((err, instances) => {
            if (err)
                return res.status(500).send(err);

            res.send(instances);
        });
    }
};

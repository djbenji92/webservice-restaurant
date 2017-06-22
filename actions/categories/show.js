module.exports = (server) => {
    const Categorie = server.models.Categorie;

    return (req, res, next) => {
        Categorie.findById(req.params.id, (err, instance) => {
            if (err)
                return res.status(500).send(err);

            if (!instance)
                return res.status(404).send();

            res.send(instance);
        });
    }
};

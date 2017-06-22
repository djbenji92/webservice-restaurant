module.exports = (server) => {
    const Categorie = server.models.Categorie;

    return (req, res, next) => {
        Categorie.findByIdAndUpdate(req.params.id,
            req.body,
            (err, instance) => {
            if (err)
                return res.status(500).send(err);

            if (!instance)
                return res.status(404).send();

            res.status(204).send();
        })
    }
};

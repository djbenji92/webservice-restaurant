module.exports = (server) => {
    const Categorie = server.models.Categorie;

    return (req, res) => {
         new Categorie(req.body)
             .save((err, instance) => {
                if (err)
                    return res.status(500).send(err);
                res.status(201).send();
             });

    };
};
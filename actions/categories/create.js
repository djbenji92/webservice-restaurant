const cors = require('cors');
module.exports = (server) => {
    const Categorie = server.models.Categorie;
    server.use(cors());

    return (req, res) => {
        /*res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.setHeader('Access-Control-Allow-Credentials', true);*/
         new Categorie(req.body)
             .save((err, instance) => {
                if (err)
                    return res.status(500).send(err);
                //res.status(201).send();
                res.send(instance);
             });

    };
};
module.exports = (server) => {
    const Categorie = server.models.Categorie;
    //const Bot = server.models.Bot;

    return (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        Categorie.findByIdAndRemove(req.params.id, (err, cat) => {
            if (err)
                return res.status(500).send(err);

            if (!cat)
                return res.status(404).send();

            res.status(204).send();

            /*if (!weapon.bot)
                return res.status(204).send();*/

            /*Bot.findById(weapon.bot, (err, bot) => {
                bot.weapons.remove(weapon._id);
                bot.slots ++;
                bot.save((err, data) => {
                    if (err)
                        return res.status(500).send(err);

                    res.status(204).send();
                });
            })*/
        })
    }
};

const express = require('express');
const server = express();
const cors = require('cors');

require('./settings')(server);              console.log('loading settings...');
require('./models')(server);                console.log('loading models...');
require('./middlewares')(server);           console.log('loading middlewares...');
require('./actions')(server);               console.log('loading actions...');
require('./routes')(server);                console.log('loading routes...');
require('./static')(server);                console.log('loading client...');

server.use(cors());

/*var allowCrossDomain = function(req, res, next) {
        // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-type, Accept');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
}
server.use(allowCrossDomain);*/

console.log(`Server listening on port ${server.settings.port}`);
server.listen(server.settings.port);


module.exports = server;
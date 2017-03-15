const express     = require('express');
const bodyParser  = require('body-parser');

const app = express();
app.use( bodyParser.json() );

app.use('/', function (req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Credentials', 'true');
   res.setHeader('Access-Control-Allow-Methods', 'GET');
   res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
   next();
});

app.listen(3000);
console.log("Server running on port 3000.");

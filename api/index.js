const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');

const app = express();


app.use(bodyParser.json()); 
app.listen(config.get('api.port'), () => console.log("pau no cu do pedro"))

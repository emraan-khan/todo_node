const express = require('express');
const path = require('path')
const port = 8000;

const bodyParser = require('body-parser'); // Import bodyParser module


const app = express();

app.use(bodyParser.json());

// getting mongodb in out project
const db = require('./config/mongoose')
// gettting view engine
app.set('view engine','ejs');
app.set('views','./views');

// add router
app.use(express.urlencoded()) 
app.use('/',require('./routes'))
// importing assets
app.use('/assets', express.static(path.join(__dirname, 'assets')));


app.listen(port, function (err) {
    if (err) {
        console.log(`Error : ${err}`)
        return;
    }

    console.log(`Server is running on port : ${port}`);
})
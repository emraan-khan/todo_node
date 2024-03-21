// require library
const mongoose = require('mongoose');

// connect to db
mongoose.connect('mongodb://127.0.0.1:27017/todo_list');

// acquire connection to check it is sucessfull
const db = mongoose.connection;

// checking error
db.on('error',console.error.bind(console, 'error connecting to the db!!!!'));

// up and running then print the message
db.once('open',function(){
    console.log("Sucessfully connected to database.");
});


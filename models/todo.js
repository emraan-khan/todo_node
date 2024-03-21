const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    completed : {
        type : Boolean,
        default: false
    }
});

const todo = mongoose.model('todo',todoSchema);

module.exports = todo;
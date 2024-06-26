const todo = require('../models/todo');

module.exports.home = function (req, res) {
    todo.find({})
        .then(todo => {
            console.log(todo);

            return res.render('home', {
                title: "Todo_List",
                todo_list: todo
            })
        })
        .catch(err =>{
            console.log('error in fetching contacts', err);
            return res.status(500).send('Error in fetcing Todos');
        })

}

module.exports.create = function(req , res){
    todo.create({
        name: req.body.name,
        category: req.body.category,
        date: req.body.date,
        completed: false
    })
    .then(newTodo =>{
        console.log('***********',newTodo);
        return res.redirect('back');
    })
    .catch(err => {
        console.log('Error in creating new Todo',err);
        return res.status(500).send('Error in Creating new Todo');
    })
}

module.exports.update=function(req,res){
    const {id}=req.body;
    console.log(id);
    todo.findById(id)
        .then(foundTodo => {
            if (!foundTodo) {
                return res.status(404).send('Document not found');
            }

            // Toggle the value of the 'completed' field
            foundTodo.completed = !foundTodo.completed;

            // Save the updated document
            return foundTodo.save();
        })
        .then(updatedTodo => {
            console.log('Document updated successfully:', updatedTodo);
            res.status(200).json(updatedTodo); // Send the updated document as the response
        })
        .catch(error => {
            console.error('Error updating document:', error);
            res.status(500).send('Error updating document');
        });

};


module.exports.delete = function(req, res) {

    todo.deleteMany({completed : true})
        .then(() => {
            console.log('Completed documents deleted successfully');
            return res.status(200).send('Completed documents deleted successfully');
            })
        .catch(err => {
            console.log('Error while deleting : ', err);
        });
};


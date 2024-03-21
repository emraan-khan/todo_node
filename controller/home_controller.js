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
    

}
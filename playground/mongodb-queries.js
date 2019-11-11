const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5dc813d5e7c99a69a5b1c8ab';
if(!ObjectID.isValid(id)){

    console.log('Id not valid');
}
// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo);
// });

Todo.findById(id).then((todo)=>{
    if(!todo){
        console.log('id not found');
    }
    console.log('Todo by id', todo);
}).catch(e) => console.log(e);
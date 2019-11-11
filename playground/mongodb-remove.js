const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result)=>{
    console.log(result);
});

Todo.findOneAndRemove({_id: 'xyz'}).then((todo)=>{
    console.log(result);
});

Todo.findByIdAndRemove(id).then((todo)=>{
    console.log(todo);
});


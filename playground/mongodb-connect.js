const {MongoClient, ObjectID} = require('mongodb'); //object destructuring

MongoClient.connect('mongodb://localhost:27017/', { useUnifiedTopology: true },(err, db) => {
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to Mongodb Server');
    // const dbo = db.db('TodoApp');
    
    //insert one todo item in collection
    // dbo.collection('Todos').insertOne({
    //     text: 'Learn Node.js',
    //     completed: false
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //insert user data in collection
    // dbo.collection('Users').insertOne({
    //     name: 'John Doe',
    //     age: '40',
    //     location: 'New York'
    // }, (err, result) =>{
    //     if(err){
    //         return console.log('unable to insert user data', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
});
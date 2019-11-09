const {MongoClient, ObjectID} = require('mongodb'); //object destructuring

MongoClient.connect('mongodb://localhost:27017/', { useUnifiedTopology: true },(err, db) => {
    if(err){
        console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to Mongodb Server');
    const dob = db.db('TodoApp');

    //deleteMany
    dob.collection('Todos').deleteMany({text:"Eat Dinner"}).then((docs)=>{
        console.log(docs);
    });
    //deleteOne
    // dob.collection('Todos').deleteOne({text:"Eat Dinner"}).then((docs)=>{
    //     console.log(docs);
    // });
    //FindandDeleteOne
    // dob.collection('Todos').findOneAndDelete({completed: true}).then((docs)=>{
    //     console.log(docs);
    // });
});
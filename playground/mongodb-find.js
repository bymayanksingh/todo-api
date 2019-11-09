const {MongoClient, ObjectID} = require('mongodb'); //object destructuring

MongoClient.connect('mongodb://localhost:27017/', { useUnifiedTopology: true },(err, db) => {
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to Mongodb Server');
    const dob = db.db('TodoApp');

    // dob.collection('Todos').find({_id: ObjectID("5dc6ab5ae9f1d924cd509f50")}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, err=>{
    //     console.log('Unable to fetch todos',err);
    // });

    // dob.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos Count: ${count}`);
    // }, err=>{
    //     console.log("Unable to fetch todos count", err);
    // });

    dob.collection('Users').find({"name":"Jen"}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2 ));
    },err=>{
        console.log('there was problem fetching the result', err);
    });
    db.close();
});
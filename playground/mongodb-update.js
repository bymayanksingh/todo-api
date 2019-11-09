const {MongoClient, ObjectID} = require('mongodb'); //object destructuring

MongoClient.connect('mongodb://localhost:27017/', { useUnifiedTopology: true },(err, db) => {
    if(err){
        console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to Mongodb Server');
    const dob = db.db('TodoApp');

    //UpdateOne
    // dob.collection('Todos').UpdateOne({text:"Eat Dinner"}).then((docs)=>{
    //     console.log(docs);
    // });

    //FindandUpdateOne
    // dob.collection('Todos').findOneAndUpdate({_id:ObjectID('5dc6abe8e6f5a32d6765b742')},{$set:{text: "Learn Node.js Basics"}},{returnOriginal:false}).then((result)=>{
    //     console.log(result);
    // });

    //FindandUpdateOne
    // dob.collection('Users').findOneAndUpdate({name:"Jen"},{$set:{name:"Howard"}},{returnOriginal:false}).then((result)=>{
    //     console.log(result);
    // });

    //FindandUpdateOne
    dob.collection('Users').findOneAndUpdate({name:"Howard"},{$inc:{age:1}},{returnOriginal:false}).then((result)=>{
        console.log(result);
    });



});
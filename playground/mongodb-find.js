//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true } , (err, client) => {
    if(err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    const db = client.db('Todos');

   
    db.collection('Users').find({ 
        name : 'Mike Stewart'
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable fo fetch Todos', err);
    });
    
    //--- Count number of registers
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable fo fetch Todos', err);
    // });


    //--- List the registers based in something, like a query
    // db.collection('Todos').find({ 
    //     _id: new ObjectID('5c185f9b4e1c764082de6e55')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable fo fetch Todos', err);
    // });

    //db.close();
});
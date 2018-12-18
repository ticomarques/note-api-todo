//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true } , (err, client) => {
    if(err) {
        // Using return here because if we have error, we stop the process here inside this if, and dont run the rest of code
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    const db = client.db('Todos');

    // db.collection('Todos').insertOne({
    //     text: 'Alguma coisa para fazer',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Error inserting info:', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Tiago Marques',
        age: 34,
        location: {
            country: 'USA',
            city: 'Fremont'
        }
    }, (err, result) => {
        if (err) {
            return console.log('Error inserting info:', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});
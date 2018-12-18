//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true } ,(err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('Todos');

  //Delete many
  // db.collection('Todos').deleteMany({ text: 'eat lunch' }).then((result) => {
  //   console.log(result);
  // });

  //delete one
  // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
  //   console.log(result);
  // });

  //findOne and delete
  // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
  //   console.log(result);
  // });


  //Challenge
  //deleteMany and deleteOne by _id
    
    // db.collection('Users').deleteMany({ name: 'Mike Stewart' }).then((result) => {
    //   console.log(result);
    // });

    db.collection('Users').deleteOne({ _id: new ObjectID('5c183a906086e8abed5706fb') }).then((result) => {
      console.log(result);
    });

  //db.close();
});
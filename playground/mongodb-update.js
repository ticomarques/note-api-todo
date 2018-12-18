//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true } ,(err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('Todos');

  //Challenge - change the name and increment the age 

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c183a3cbba7a0abec49ceb9')
  },{
    $set : {
      name: 'Tiago Marques Leite'
    },
    $inc: {
      age: 1
    }
  },{
    returnOriginal:false
  }).then((result) => {
    console.log(result);
  });


  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c19483d4e1c764082de77cd')
  // }, {
  //   $set:{
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  //db.close();
});
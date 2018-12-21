const {ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User }  = require('./../server/models/user');

// var id = '5c1b003bcb7a74cf3392a7a7';

// if (!ObjectID.isValid(id)){
//     console.log('ID not valid!');
// }

//Here, we dont need to convert do ObjectID, the mongoose does it for us, just use the var id

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos: ', todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo: ', todo)
// });

//Below is the best option - faster and write less
    // Todo.findById(id).then((todo) => {
    //     if(!todo){
    //         return console.log('Id not found');
    //     }
    //     console.log('Todo: ', todo)
    // }).catch((e) => console.log(e));


//-------------
// Go to user and bring the user by id
// Create a message if user not found
// Create a message if ID is invalid
//-------------

var user_id = '5c1d503fcee8d7a510d9304a';

if(!ObjectID.isValid(user_id)){
    console.log('Invalid ID User');
}


User.findById(user_id).then((user) => {
    if(!user){
        return console.log('User id not found');
    }
    console.log('User', user);

}).catch((e) => console.log(e));
const {ObjectID} = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User }  = require('../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove()
Todo.findByIdAndRemove('5c29e5734927a2e5c25b5223').then((todo) => {
    console.log(todo);
});




var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//var remoteDB = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds243054.mlab.com:43054/todosdb`;
var remoteDB = `mongodb+srv://dbdev:${process.env.DB_PASS}@cluster0-hwqpu.mongodb.net/todosdb?retryWrites=true`;
var local = 'mongodb://localhost:27017/TodoApp';

mongoose.connect(remoteDB || local, { useNewUrlParser: true });

module.exports = {
    mongoose
};
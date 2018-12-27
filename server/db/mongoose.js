var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var remoteDB = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds243054.mlab.com:7557/todosdb`;
var local = 'mongodb://localhost:27017/TodoApp';

mongoose.connect(remoteDB || local, { useNewUrlParser: true });

module.exports = {
    mongoose
};
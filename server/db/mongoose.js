var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//var remoteDB = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds243054.mlab.com:43054/todosdb`;
var remoteDB = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds151955.mlab.com:51955/heroku_d30sf7p8`;
var local = 'mongodb://localhost:27017/TodoApp';

mongoose.connect(remoteDB || local, { useNewUrlParser: true });

module.exports = {
    mongoose
};
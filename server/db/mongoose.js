var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const local = 'mongodb://localhost:27017/TodoApp';

mongoose.connect(process.env.MONGODB_URI || local, { useNewUrlParser: true });

module.exports = {
    mongoose
};
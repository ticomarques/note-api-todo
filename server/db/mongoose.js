var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });

module.exports = {
    mongoose
};
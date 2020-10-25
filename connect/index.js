const mongoose = require('mongoose');
const config = require('config');

const dbPath = config.get('mongoURL');
mongoose.connect(dbPath, {useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify:false}, ()=> {
    console.log('connected to mongodb successfully');
});

module.exports = mongoose;
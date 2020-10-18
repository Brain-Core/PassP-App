const mongoose = require('mongoose');
const config = require('config');

const dbPath = config.get('mongoURL');
mongoose.connect(dbPath, {useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology:true}, ()=> {
    console.log('connected to mongodb successfully');
});
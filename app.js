const express = require('express');

const app = express();
app.use(express.json()) // replaced body-parser


app.use('/api/user', require('./routes/userRoute'));

const port = process.env.PORT || 4040;
app.listen(port, () => console.log('listen on port: ', port));
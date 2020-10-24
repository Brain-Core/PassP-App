const express = require('express');

const app = express();
app.use(express.json()) // replaced body-parser


app.use('/api/user', require('./routes/userRoute'));
app.use('/api/auth', require('./routes/authRoute'));
app.use('/api/profile', require('./routes/profileRoute'));

const port = process.env.PORT || 4040;
app.listen(port, () => console.log('listen on port: ', port));
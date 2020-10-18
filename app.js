const express = require('express');

const app = express();

const port = process.env.PORT || 4040;
app.listen(port, () => console.log('listen on port: ', port));
const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    res("Hello World");
});

app.listen(3000);
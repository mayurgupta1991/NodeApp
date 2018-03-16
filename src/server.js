const express = require('express');
const server = require('./serverPort');

var app = express();
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'Andrew',
        likes: [
            'Biking',
            'Cities'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
});

app.listen(server.SERVER_PORT, () => {
    console.log(`Server is up on port ${server.SERVER_PORT}`);
});
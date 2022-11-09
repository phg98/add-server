// Express server to add input and returns sum of inputs
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let sum = 0;

// Main html page
app.get('/', (req, res) => {
    console.log(req.body);
    res.sendFile(__dirname + '/index.html');
});

// Reset
app.get('/reset', (req, res) => {
    sum = 0;
    res.send(`${sum}`);  
});

// Add input to sum
app.post('/add', (req, res) => {
    console.log(req.body);
    sum += req.body.input;
    res.send(`${sum}`);  
});

// Return sum
app.get('/sum', (req, res) => {
    res.send(`${sum}`);
});

// Run server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


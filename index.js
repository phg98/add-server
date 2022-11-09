// Express server to add input and returns sum of inputs
const express = require('express');
const app = express();
// use 3000 port unless there exists a preconfigured port
const port = process.env.PORT || 3000;
// use CORS to allow cross origin requests
const cors = require('cors');
app.use(cors());
app.options('*', cors())

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


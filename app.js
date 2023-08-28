const express = require('express');

const app = express();

// Middleware function
app.use((req, res, next) => {
    console.log('Hello from a middleware function!');
    next();
  });

// Assign routes
app.get('/', (req, res) => {
    if (req.params.message) {
        res.send(`Echo: ${req.params.message}`);
    } else {
        console.log('Hello from intermediate route hander function')
        next();
    }
});

app.get('/', (req, res) => {
    res.send('Hello from a route handler function!');
});

app.get('/throw-error', (req, res) => {
    throw new Error('An error occurred!');
  });
  
  // Custom error handler
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500);
    res.send('An error occurred! Please check the url, or wait a few minutes and try again.');
});

// Tell the server to listen for incoming traffic on a specific port
const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
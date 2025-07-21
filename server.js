const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (CSS/images etc.)
app.use(express.static(__dirname + '/www'));

// Import routes
require('./routes/homeroute.js').route(app, path);

// Start the server
let server = http.listen(3000, function () {
  console.log('Server running at http://localhost:3000');
});

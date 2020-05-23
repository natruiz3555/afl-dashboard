const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Serve static files from dist/afl-dashboard
app.use(express.static(__dirname + '/dist/afl-dashboard'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/afl-dashboard/index.html'));
});

// Start listening
app.listen(port);
console.log(`Listening on http://127.0.0.1:${port}/`)
const express = require('express');
const path = require('path'); // Import the path module
const routes = express.Router();

routes.get('/', function(req, res) {
    const filePath = path.join(__dirname, './views/umer'); // Construct the absolute path
    res.download(filePath);
});
module.exports = routes;

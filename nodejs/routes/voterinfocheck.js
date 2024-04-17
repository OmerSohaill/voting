const express = require('express');
const routes = express.Router();
const { voterinfos } = require('../models/todo');

routes.get('/', async function (req, res) {
    try {
        const { email, cnic } = req.query; // Using req.query instead of req.body
        const vote = await voterinfos.findOne({ email, cnic });
        if (vote) {
            res.render('sendvoter',{vote});
        } else {
            res.send("voter not found")
            
        }
    } catch (error) {
        res.send(error);
    }
});

module.exports = routes;

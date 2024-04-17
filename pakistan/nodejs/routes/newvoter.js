const express = require('express');
const routes = express.Router();
const { voterinfos } = require('../models/todo.js'); // Assuming your model is named VoterInfo

routes.post('/', async function(req, res) {
    
    const { email, cnic } = req.body;
    console.log(email,cnic)
    try {
        const newVoter = new voterinfos({ email, cnic });
        await newVoter.save();
        res.send("Voter successfully created");
    } catch (error) {
        console.error("Error creating voter:", error);
        res.status(500).send("Error creating voter");
    }
});

module.exports = routes;

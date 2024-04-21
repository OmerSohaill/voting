const express = require('express');
const routes = express.Router();
const { candidatess } = require('../models/todo');

// POST route to add a new candidate
routes.post('/', async function(req, res) {
    const { id, party } = req.body;
    try {
        const can = new candidatess({ id, party });
        await can.save();

        // 
       
    
        res.send(`Candidate Successfully Created with ID: ${id}, Party: ${party}`);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send('An Error Occurred. Please Try Again Later.');
    }
});

module.exports = routes;

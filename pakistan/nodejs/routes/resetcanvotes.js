const express = require('express');
const routes = express.Router();
const { candidatess } = require('../models/todo');

routes.post('/', async function(req, res) {
    try {
        // Find all candidates
        const allCandidates = await candidatess.find({});
        
        // Reset total votes for each candidate to 0
        await Promise.all(allCandidates.map(async (candidate) => {
            candidate.totalvote = 0;
            await candidate.save();
        }));
        
        
        res.send("All candidates' total votes have been reset to 0.");
    } catch (error) {
        console.error(error);
        res.status(500).send('An Error Occurred. Please Try Again Later.');
    }
});

module.exports = routes;

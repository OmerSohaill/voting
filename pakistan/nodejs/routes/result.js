const express = require('express');
const routes = express.Router();
const { candidatess } = require('../models/todo');

routes.post('/', async function(req, res) {
    try {
        // Fetch all candidates from the database
        const resul = await candidatess.find();

        // Sort candidates by party and then by total votes within each party
        resul.sort((a, b) => {
            // First, compare by party
            if (a.party < b.party) return -1;
            if (a.party > b.party) return 1;
            // If parties are the same, compare by total votes
            return b.totalvote - a.totalvote;
        });

        // Determine the party with the most votes (winner)
        const partyVotes = {};
        let winningParty = '';
        let maxVotes = 0;
        resul.forEach(candidate => {
            if (!partyVotes[candidate.party]) {
                partyVotes[candidate.party] = candidate.totalvote;
            } else {
                partyVotes[candidate.party] += candidate.totalvote;
            }
            if (partyVotes[candidate.party] > maxVotes) {
                maxVotes = partyVotes[candidate.party];
                winningParty = candidate.party;
            }
        });

        // Send the sorted candidates and winning party as response
        res.render('resultinfo',{ candidates: resul, winningParty });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = routes;

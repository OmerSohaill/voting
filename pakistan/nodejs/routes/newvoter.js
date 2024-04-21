const express = require('express');
const routes = express.Router();
const { voterinfos } = require('../models/todo.js'); // Assuming your model is named VoterInfo

routes.post('/', async function(req, res) {
    const { email, cnic } = req.body;
    console.log(email,cnic)
    try {
        const newVoter = new voterinfos({ email, cnic });
        const newvoters=await newVoter.save();
        if(newvoters){
            res.send("Voter successfully created");
        }
        else{
            res.send("Error Candidate Note Save PlZ Try Again Later")
        }

    } catch (error) {
        console.error("Error creating voter:", error);
        res.status(500).send("Error creating voter");
    }
});




module.exports = routes;

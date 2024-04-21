
const express=require('express')
const routes=express.Router();
const {candidatess}=require('../models/todo')
routes.post('/', async function(req, res) {
    console.log("nsa")
    const { id, party, totalvote, aligible } = req.body;

    try {
        // Convert id string to ObjectId
       

        // Update candidate using the converted ObjectId
        const updatedCandidate = await candidatess.findOneAndUpdate(
            { id }, // Use converted ObjectId here
            { $set: { party, totalvote, aligible }}
        );

        res.send("Candidate Updated Successfully");
    } catch (error) {
        res.send(error);
    }
})
module.exports=routes;
const express = require('express');
const routes = express.Router();
const {voterinfos}=require('../models/todo')
routes.post('/',async function(req,res){
    const {email,newemail,cnic,newcnic,votecast}=req.body;


try {
    const votes = await voterinfos.findOneAndUpdate(
        { email, cnic },
        { $set: { email: newemail, cnic: newcnic, votecast } }
    );
    if (!votes) {
        return res.status(404).send("Voter not found");
    }
    res.send(`Candidate Updated Successfully with NEW EMAIL: ${newemail}, NEW CNIC: ${newcnic}, Vote Cast: ${votecast}`);
} catch(error) {
    console.error("Error updating voter:", error);
    res.status(500).send("Internal Server Error");
}
})

module.exports = routes;

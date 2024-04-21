const express = require('express')
const routes = express.Router();
const { candidatess } = require('../models/todo')
const { voterinfos } = require('../models/todo')
routes.post('/', async function (req, res) {

    const { email, cnic, id } = req.body;
  
    try {



        const user = await voterinfos.findOne({ email, cnic })

        if (!user || user.votecast) {
            res.send("Check your Cnic or your alredy cast your vote")
            return
            

        }
        const forvote=await candidatess.findOne({id})
        if(!forvote ){

            res.send("candidate not found with thid Id plz check your ID and Try Again");
            return 
        }
        if(!forvote.aligible){
            res.send("Candidate is not Aligible for Voting ")
        }

        await voterinfos.findOneAndUpdate({ email, cnic }, { $set: { votecast: true } });
        
        await candidatess.findOneAndUpdate({id},{ $inc: { totalvote:1 } })

        res.send(`Vote cast successfully for candidate with ID ${id}.`);

        
        
    

    } catch (error) {
        res.send(error)
    }


})
module.exports = routes;
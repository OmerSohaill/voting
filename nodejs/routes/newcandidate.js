const express=require('express')
const routes=express.Router();
const { candidatess }=require('../models/todo')
routes.post('/',async function(req,res){
    const{id,party}=req.body;
    
    try{
        const can= new candidatess({id,party})
        await can.save();
        res.send(`Voter Successfully Create with id :${id} partyname:${party}`)

    }catch(error){
        res.send(error)
    }


    

})
module.exports=routes;
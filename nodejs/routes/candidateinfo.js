const express=require('express');
const routes=express.Router();
const { candidatess }=require('../models/todo')
routes.post('/',async function(req,res){
    const {id}=req.body;
    const can=await candidatess.findOne(id)
    if(!can){
        res.send("Candidate Not Found ");
        return
    }

    res.render('candidateinfo',{can})




})
module.exports=routes;
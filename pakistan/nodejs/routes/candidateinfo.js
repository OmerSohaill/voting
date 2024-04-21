const express=require('express');
const routes=express.Router();
const { candidatess }=require('../models/todo')
routes.post('/',async function(req,res){
    const {id ,party}=req.body;
    console.log(id)
    const can=await candidatess.findOne({id})
        if(!can){
        res.send("Candidate Not Found ");
        return
    }
    console.log(can)

    res.render('candidateinfo',{can})




})
module.exports=routes;
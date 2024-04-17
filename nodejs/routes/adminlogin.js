const express=require('express')
const routes=express.Router();
const {admins}=require('../models/todo.js')
const { setadmin }=require('../controllers/auth.js')

routes.post('/',async function(req,res){
    const {email,password}=req.body;
    const admin=await admins.findOne({email,password})
    if(admin){
        const admintoken= setadmin(admin);
        res.cookie("admin",admintoken).render('adminhome')

    }
    if(!admin){
        res.send("Check your email and password and try again")
    }
    
})

module.exports=routes;
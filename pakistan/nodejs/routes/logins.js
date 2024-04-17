const express = require('express');
const routes = express.Router();
const { logins } = require('../models/todo.js');
const { setuser } = require('../controllers/auth.js');

routes.post('/', async function(req, res) {
    try {
        console.log("res is coming")
        const { email, password } = req.body;
        console.log(email,password)
        const user = await logins.findOne({ email, password });
        console.log(user)

        if (user) {
            const token = setuser(user);
            res.cookie('token', token).render('votehome');
        }else if(!user) {
            res.send("Check your Email And Password and try again");
        }
    } catch (error) {
        res.send(error);
    }
});


module.exports = routes;

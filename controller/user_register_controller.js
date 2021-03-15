const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
require('../models/user_register');
const UserReg = mongoose.model('new_Register');

router.get('/user',async (req,res)=>{
    const data = await UserReg.find();
    res.json(data);
});

router.post('/user',(req,res)=>{
    insertRecord(req,res);
})

function insertRecord(req,res) {
    const user = new UserReg();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err,doc)=>{
        if (!err) {
            res.json(user);
        }
        else{
            console.log('Error during record insertion :',err);
        }
    });
}

module.exports = router;
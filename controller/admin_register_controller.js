const express = require('express');
const router = express.Router();
const mongooes = require('mongoose');
require('../models/admin_register');
const Admin = mongooes.model('admin_register');

router.get('/admin', async(req,res)=> {
  const data = await Admin.find();
  res.json(data);

})

router.post('/admin/post', async (req, res)=>{
  const postData = await new Admin();
    postData.name= req.body.name;
    postData.email= req.body.email;
    postData.password= req.body.password;
  postData.save((err,doc)=>{
    if (!err) {
        res.json(postData);
    }
    else{
        console.log('Error during record insertion :',err);
    }
})
})

module.exports = router;
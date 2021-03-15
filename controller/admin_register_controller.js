const express = require('express');
const router = express.Router();
const mongooes = require('mongoose');
require('../models/admin_register');
const Admin = mongooes.model('admin_register');

router.get('/admin', async(req,res)=> {
  const data = await Admin.find();
  res.json(data);
})

router.post('/admin', (req, res)=>{
  const postData = new Admin()
    postData.name= req.body.name;
    postData.email= req.body.email;
    postData.password= req.body.password;
  postData.save()
  .then(resg=>{
    res.json(resg)
  })
})

module.exports = router;
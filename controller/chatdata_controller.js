const mongooes = require('mongoose');
require('../models/chat-info');
const express = require('express');
const router = express.Router();
const ChatData = mongooes.model('chatinfo');

router.get('/chatdetail',async(req,res)=>{
  const data = await ChatData.find();
    res.json(data);
})

router.put('/chatpost/pushquetionandanswer', async(req,res)=>{
  console.log("req.body****", req.body);
  const data1 ={
    quetion: req.body.quetion,
    answer: req.body.answer
  }
  const data = await ChatData.updateOne({
    name: req.body.name
  },{
    $push: {
      data: JSON.stringify(data1)
    }
  }
  );
  res.json(data)
})

router.put('/chatpost/data/edit/:id', async(req,res)=>{
   const find = await ChatData.find();
   const test = await find.find(item=> req.body.name === item.name);
   const gg = test.data.map((item, i)=>{
    const {quetion, answer} = JSON.parse(item);
    if(quetion === req.params.id) {
      return JSON.stringify({quetion: req.body.quetion,answer: req.body.answer})
    }
    return JSON.stringify({quetion: quetion,answer: answer})
   })

    const data = await ChatData.updateOne({
      name: req.body.name
    },{
      $set: {
        data: gg
      }
    }
    );
res.json(data)
})

router.put('/chatpost/data/delete/:id', async(req,res)=>{
  const find = await ChatData.find();
  const test = await find.find(item=> item.name === req.body.name);
  const gg = test.data.filter(item => {
    const {quetion, answer} = JSON.parse(item);
    if(quetion === req.params.id) {
      return ;
    }
    return JSON.stringify({quetion: quetion,answer: answer});
  })
  const data = await ChatData.updateOne({
    name: req.body.name
    },{
    $set: {
    data: gg
    }
    }
  );
  res.json(data)
})

router.post('/chatpost', (req,res)=>{
  const data1 = {
    quetion: req.body.data && req.body.data.quetion ? req.body.data.quetion : '',
    answer:  req.body.data && req.body.data.answer ? req.body.data.answer: ''
  }
  const chatInfo = new ChatData({
    name: req.body.name,
    data: req.body.data && req.body.data.quetion && req.body.data && req.body.data.answer ? JSON.stringify(data1) : [],
  });
  chatInfo.save((err,doc)=>{
    if (!err) {
        res.json(chatInfo);
    }
    else{
        console.log('Error during record insertion :',err);
    }
  });
})

module.exports = router;
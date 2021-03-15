const mongooes = require('mongoose')
const chatData  = new mongooes.Schema({
  name :{
    type: String
  },
  data: [String]
});

mongooes.model('chatinfo', chatData);

const mongooese = require('mongoose');
const admindetail = new mongooese.Schema({
  name:{
    type: String
  },
  email:{
    type:String
  },
  password:{
    type:String
  }
});

mongooese.model('admin_register', admindetail);
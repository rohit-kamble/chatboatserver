const mongoose = require('mongoose');
const userRegisterSchema = new mongoose.Schema({
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

mongoose.model('new_Register',userRegisterSchema);
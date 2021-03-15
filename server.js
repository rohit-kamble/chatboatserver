
require('./models/db')
const express =require('express');
const bodyparser = require('body-parser');
const userRegisterController = require('./controller/user_register_controller');
const adminRegisterController = require('./controller/admin_register_controller');
const chatInfoController = require('./controller/chatdata_controller');

const app = express();
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());

app.listen(5001,()=>{console.log('Start at 5001');
})
app.use(chatInfoController);
app.use(userRegisterController);
app.use(adminRegisterController);

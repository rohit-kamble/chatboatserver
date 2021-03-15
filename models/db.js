const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cahtboatdata', {useUnifiedTopology: true},(err)=>{
    if (!err) {
        console.log('Connected')
    }
    else{
        console.log('Error in connection',err)
    }
});
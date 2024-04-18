const mongoose = require('mongoose');

exports.connectDatabase = async() => {
    mongoose.connect(process.env.MONGO_URI).then(()=> {
        console.log('MongoDB connected successfully')
    })
    .catch((err)=>{
        console.log('error');
    })
}


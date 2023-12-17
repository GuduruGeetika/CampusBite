const mongoose = require("mongoose");

var mongoURL= 'mongodb://127.0.0.1:27017/campusbite';

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection 

db.on('connected',()=>{
    console.log('Mongo DB connection sucessful');

})
db.on('error',(err)=>{
    console.log('Mongo DB connection failed',err);
})
module.exports= mongoose;
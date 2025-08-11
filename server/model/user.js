const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
Name:{type:String, required:true},
Email:{type:String, required:true},
Subject:{type:String},
Number:{type:String, required:true}

})
const UserData=mongoose.model('User',userSchema);
module.exports={UserData}
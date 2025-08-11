const mongoose=require('mongoose');

const userSchema1=new mongoose.Schema({
Password:{type:String, required:true},
Email:{type:String, required:true},


})
const StudentData=mongoose.model('Student',userSchema1);
module.exports={StudentData}
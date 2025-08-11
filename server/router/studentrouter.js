const express=require('express');
const { InsertStudent, GetStudent } = require('../controller/studentcontroller');

const studentrouter=express.Router()

studentrouter.post('/addStudent',InsertStudent);
studentrouter.post('/getStudent',GetStudent);


module.exports={studentrouter}
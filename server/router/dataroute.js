const express=require('express');
const {handleInsertUserData, handleGetUserData}=require('../controller/user.controller')
const datarouter=express.Router()

datarouter.post('/adddata',handleInsertUserData)
datarouter.post('/getdata',handleGetUserData)


module.exports={datarouter}
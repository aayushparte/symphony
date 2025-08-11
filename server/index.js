const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose=require('mongoose');
const { datarouter } = require('./router/dataroute');
const {studentrouter}=require('./router/studentrouter');
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log("Database Connected Successfully");
  }).catch((err)=>{
  console.log(err);
  
})


app.use('/data',datarouter);

app.use('/student',studentrouter)


app.listen(5000, () => console.log('Server running on port 5000'));
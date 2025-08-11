const { model } = require('mongoose');
const {StudentData}=require('../model/studentmodel');

const InsertStudent=async(req,res)=>{
    try{
    const data=req.body;
    console.log(data);
    if(!(data.Email && data.Password))
    {
        return res.status(400).json({Message:"Missing Fields",Success:false});
    }
    const newStudent=new StudentData(data);
        await newStudent.save(); 
        return res.status(200).json({ Message: "Data saved successfully", Success: true });
}catch (error) {
    return res.status(500).json({ Message: error.message, Success: false });
  }
}

const GetStudent = async (req, res) => {
  try {
    const data = req.body;
    console.log("Login attempt:", data);

    if (!(data.Email && data.Password)) {
      return res.status(400).json({ Message: "Missing Email or Password", Success: false });
    }

    const student = await StudentData.findOne({ Email: data.Email });

    if (!student) {
      return res.status(404).json({ Message: "Student not found", Success: false });
    }

    if (student.Password === data.Password) {
      return res.status(200).json({ Message: "Correct Email & Password", Success: true });
    } else {
      return res.status(401).json({ Message: "Incorrect Password", Success: false });
    }

  } catch (error) {
    return res.status(500).json({ Message: error.message, Success: false });
  }
};


module.exports={InsertStudent,GetStudent}
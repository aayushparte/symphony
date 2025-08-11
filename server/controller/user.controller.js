const{UserData}=require('../model/user.js')
const handleInsertUserData=async(req,res)=>{
    try{
        const data=req.body;
        console.log("data:",data);
        if(!(data.Name && data.Email && data.Number)){
            return res.status(400).json({Message:"Missing Fields",Success:false});
        }
        const newUser=new UserData(data);
        await newUser.save(); 
         return res.status(200).json({ Message: "Data saved successfully", Success: true });
    }catch (error) {
    return res.status(500).json({ Message: error.message, Success: false });
  }
}
const handleGetUserData= async (req, res) => {
  const { email } = req.body;

  try {
    const student = await UserData.findOne({ Email: email  });

    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}



module.exports={handleInsertUserData,handleGetUserData}


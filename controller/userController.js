const userModel = require('../models/userModel')
const validator = require('validator')



const loginUser = async(req, res) => {
    // console.log(req.userData)
      const {email} = req.userData;
      

      try{
        if(!email){
            return res.status(400).json({message: "Please enter all fields"})
        }

        const user = await userModel.findOne({email})

       if(!user){
        user = new userModel({name, email})
        user.save();
       }

        return res.status(200).json({message:"User exist", user});
      }
      catch(err){
            return res.status(400).json({message: "User does not exist", err});
      }
}

const registerUser = async(req, res) => {
     const {name, email} = req.body; 
   
     try{
      const exists = await userModel.findOne({email})
      if(exists){
          return res.status(400).json({message: "User already exists"})
      }
      if (validator.isEmpty(name) || validator.isEmpty(email)) {
          return res.status(400).json({message: "Please enter all fields"})
      }
      if(!validator.isEmail(email)){
          return res.status(400).json({message: "Please enter a valid email"})   
      }
       
      const newUser = new userModel({name, email})
      const user = await newUser.save()
     
      res.status(200).json({user}) 

     }
     catch(err){
         return res.status(400).json({err});
     }
}

const getUser = async(req, res) => {
     const {email} = req.body;

     try{
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({message:"User Credential Is Not Valid"});
        }
        return res.status(200).json({message:'Credential Is Valid'});
     }
     catch(err){
      res.status(400).json({message:err});
     }
}

module.exports = {loginUser, registerUser, getUser}
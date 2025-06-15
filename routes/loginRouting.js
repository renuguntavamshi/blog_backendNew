const express=require('express');
const Login=require('../models/singupModel');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const loginRouting=express.Router();
loginRouting.post("/login",
    async (req,res)=>{
console.log(req.body)
  const {email,password}=req.body;
  
let emailExists=await Login.findOne({email:email})
console.log(emailExists);
let result=bcrypt.compareSync(password,emailExists.password);
console.log(result);
if(!emailExists){
    res.send("Email does not exists");
}
else if(bcrypt.compareSync(password,emailExists.password)){
  console.log(password);
  console.log(emailExists.password);

    let payload={
          user:{id:emailExists._id,
          },
          }
        jwt.sign(payload,"jsonString@1234",{expiresIn:360000},(err,token)=>{
          if(err) throw err;
          console.log(token);
          res.status(201).json({token,name:emailExists.name})
        }) 
}
else{
  console.log(password);
  console.log(emailExists.password);
    res.status(404).json({message:"Invalid credientials"})
}
})


module.exports=loginRouting;
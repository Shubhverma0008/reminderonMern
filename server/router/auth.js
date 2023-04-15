const express=require('express');
const router=express();
const User=require('../models/user');

const bcrypt=require('bcrypt');

router.post('/signup',async(req,res)=>{
     console.log(req.body);
    const {username,password,cpassword}=req.body;
    if(!username||!password||!cpassword)
    res.status(422).json({error:"Please fill all the  details"});//422 is client error
    try {
        const usernameExist=await User.findOne({username:username})
         if(usernameExist)res.status(422).json({error:"username already exist"});
         else if(password!=cpassword)
         res.status(422).json({error:"Password does not match"});
         else{
            const salt=await bcrypt.genSalt(10);
            const hashpassword=await bcrypt.hash(req.body.password,salt);
            // console.log(hashpassword);
            const newuser=new User({username:username,password:hashpassword});
            await newuser.save();
            return res.status(200).json({message:"cool account is created"});

         }        
    } catch (error) {
        res.status(500).json(error);
    }

})
router.post('/signin',async(req,res)=>{
    const {username,password}=req.body;
    try{
        const userExist=await User.findOne({username:username});
        if(!userExist)
        return res.status(422).json({error:"Please Enter Valid Username"});
        else{
            const match=await bcrypt.compare(password,userExist.password);
            if(!match)return res.status(422).json({error:"Please enter a valid password"});
            else 
            return res.status(200).json({message:"Wow you are logged in"});

        }
    }catch(err){
    res.status(500).json(err)};
})


module.exports=router;
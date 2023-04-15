const express=require('express');
const reminder=express();
const Reminder=require('../models/reminderSchema');
reminder.post('/create',async(req,res)=>{
    try {
        const{date,subject,desc,email,contact,sms,nextoccur}=req.body;
        if(!date||!subject||!desc||!email||!contact||!sms||!nextoccur)
        return res.status(422).json({message:"Please fill all the details"});
        else{
            const newReminder =new Reminder({date,subject,desc,email,contact,sms,nextoccur});
            await newReminder.save();
            return res.status(200).json({message:"Reminder is created"});
        }
        
    } catch (error) {
        res.status(500).json(err);
        
    }
})

module.exports=reminder
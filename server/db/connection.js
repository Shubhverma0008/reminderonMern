const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/Reminder").then(()=>console.log("database is connected successfully")).catch((err)=>console.log(err));
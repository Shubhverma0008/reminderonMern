const mongoose=require('mongoose');
const reminderSchema= new mongoose.Schema({
     date:{
        type:Date
      //   require:true
     },
     subject:{
        type:String
      //   require:true
     },
     desc:{
        type:String
      //   require:true
     },
     email:{
        type:String
        

     },
     contact:{
        type:Number
       
     },
     sms:{
        type:Number
        
     },
     nextoccur:{
        type:Number
        

     }
},
{timestamps:true}
)
module.exports=mongoose.model("Reminder",reminderSchema);
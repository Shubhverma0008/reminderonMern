const express=require('express');
const app=express();
require('./db/connection')
const bodyParser=require('body-parser');
app.use(express.json());
app.use (bodyParser.urlencoded ({extended: true}));

// app.use(require('/api/auth/','/router/auth'))
const authRoute=require('./router/auth')
const reminderRoute=require('./router/reminders')
app.use('/api/auth/',authRoute);
app.use('/api/reminders/',reminderRoute);
app.get('/',(req,res)=>{
      res.send("server is running");
});

app.listen(8800,()=>{
    console.log(`server is running`);
})
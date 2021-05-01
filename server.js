var express = require('express');
const port=5000;
const path=require('path');
const app = express();
app.set('view engine', 'pug');


const logTime=function(req,res,next){
    const date=new Date();
    let day=date.getDay();
    let hours=date.getHours();

  if (day<6 && hours>=9 && hours<=17){ next();}
  else{
      console.log("Site not Available")
     res.sendFile(__dirname+'/public/noAvailable.html')


  }
    console.log("date is : "+ day+" and hour is :"+hours);
  
};
app.use(logTime)
app.use('/',require('./routes/view'))
app.listen(port,(err,data)=>{
    if (err) throw err
    console.log('server is running !')


})
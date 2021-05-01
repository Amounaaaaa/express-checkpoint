const router = require('express').Router();
const path=require('path')
//const port=5000



router.get('/noAvailable', function(req, res) {
    res.render('/noAvailable');
});
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'..','public','index.html'))
});


router.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','contact.html'))
 })
 router.get('/service',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','service.html'))
 })



module.exports=router
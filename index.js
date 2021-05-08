const express=require('express');
const app=express();
app.get('/make_payment',(req,res)=>{
    res.sendFile(__dirname+'/payment.html');
});
app.get('/payment_sucess',(req,res)=>{
    res.sendFile(__dirname+'/payment_sucess.html');
});
app.get('/payment_cancled',(req,res)=>{
    res.sendFile(__dirname+'/payment_cancled.html');
});
app.listen(process.env.PORT || 3000,()=>{
    console.log('Server running');
});
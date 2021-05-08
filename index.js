const express=require('express');
const app=express();
app.get('/make_payment',(req,res)=>{
    res.sendFile(__dirname+'/payment.html');
});
app.listen(process.env.PORT || 3000,()=>{
    console.log('Server running');
});
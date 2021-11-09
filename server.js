//cosas TODO: 
//qweqwe
const express=require('express');
const app=express();

app.use('/',(req,res)=>{
    res.status(200).send('La API funciona')
});

app.listen(4000);
const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    console.log(req.originalUrl)
})
app.listen(process.env.PORT || 5000,()=>console.log("Server is Open"))
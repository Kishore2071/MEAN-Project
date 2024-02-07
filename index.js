const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.get("/about",(req,res)=>{
    res.send("Hello World from about")
})

app.listen(3001,()=>{
    console.log("Server Running at port 3001")
})

// http://localhost:3001/
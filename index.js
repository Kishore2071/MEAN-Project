const express = require("express")
const mongoose = require("mongoose")
const Students = require("./models/student")
const app = express()

mongoose.connect("mongodb://localhost:27017/school",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Connection Sucessfull")
})

app.get("/",(req,res)=>{
    Students.find().then((student)=>{
        res.json(student)
    })
})

app.post("/add",(req,res)=>{
    const student = new Students({
        name:"Abhishek",
        rollno:1,
        branch:"CSE",
        year:2020
    })
    student.save().then(()=>{
        res.send("inserted")
    })
})

app.put("/update",(req,res)=>{
    Students.updateOne({name:"Abhishek"},{name:"Abhishek Garg"}).then(()=>{
        res.send("updated")
    })
})

app.delete("/delete",(req,res)=>{
    Students.deleteOne({name:"Abhishek Garg"}).then(()=>{
        res.send("deleted")
    })
})


app.listen(3001,()=>{
    console.log("server runnning on 3001")
})
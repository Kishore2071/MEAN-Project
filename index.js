const express = require("express")
const mongoose = require("mongoose")
const Students = require("./models/student")
const bodyparser = require("body-parser")
const app = express()

mongoose.connect("mongodb://localhost:27017/school",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Connection Sucessfull")
})

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.get("/",(req,res)=>{
    Students.find().then((student)=>{
        res.json(student)
    })
})

app.post("/add",(req,res)=>{
    const data = req.body
    const student = new Students({
        name: data.name,
        rollno: data.rollno,
        branch: data.branch,
        year: data.year
    })
    student.save().then(()=>{
        res.send("inserted")
    })
})

app.put("/update",(req,res)=>{
    const data = req.body
    Students.updateOne({name:"Abhishek"},{name:data.name}).then(()=>{
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
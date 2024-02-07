const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/school",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Connection Sucessfull")
})

const mongoose  =  require("mongoose");

mongoose.connect("mongodb://localhost:27017/ChatApplication")
.then(()=>{
    console.log("mongoDB Connected");
})
.catch(() =>{
    console.log("error");
})


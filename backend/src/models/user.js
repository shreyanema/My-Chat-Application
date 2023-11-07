const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fname:{
        type :String,
        required: true
    },
    lname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type:Number,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cnf_password:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model("userdetail",userSchema);
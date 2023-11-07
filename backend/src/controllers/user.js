const express = require('express');
const UserDetail = require("../models/user");
const bodyParser = require('body-parser');
const app  =  express();
app.use(bodyParser.json());

const login = async(req,res) =>{
    
        const {L_email,L_password} = req.body;
        
        try{
            const user = await UserDetail.findOne({email:L_email});
            if(user && user.password == L_password){
               
                req.session.email = user.email;
                req.session.fname = user.fname;
               // res.json({message:'login successful'});
               console.log(req.session.email);
                res.redirect("/welcome");

            }
            else{
                res.json({message:"invalid credentials"});
            }
        }
        catch(error){
            res.status(500).json({message:"internal server error"});
            console.log(error)
        }
         
    }
    



const register  = async (req,res) => {
     //save data here to db 
        try{
        const newEntry = new UserDetail({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            cnf_password: req.body.cnf_password
        })
            const result = await newEntry.save();
            console.log(result);
            res.json({ message: result });
        }
        catch(err){
            console.log(err);
        }
    }
    
module.exports={register,login};









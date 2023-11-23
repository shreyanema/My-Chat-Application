const express = require('express');
const UserDetail = require("../models/user");
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");
const app  =  express();
app.use(bodyParser.json());

const login = async(req,res) =>{
       // const {L_email,L_password} = req.body;
        let lowerCaseStr = req.body.L_email.toLowerCase();
        try{
            //const In_L_Email = '/'+L_email+'/i'; 
            const user = await UserDetail.findOne({email:lowerCaseStr});
           
            if(user){

                        comparehashPass(req.body.L_password, user.password)
                            .then((result) => {
                                if (result) {
                                    req.session.email = user.email;
                                    req.session.fname = user.fname;
                                    console.log(req.session.email);
                                    res.json({loginstatus: true, sessionemail: req.session.email, sessionname : req.session.fname });
                                } else {
                                    res.json({message:"Invalid Credentials!!"});
                                }
                            })
                            .catch((error) => {
                                console.error('Error during password comparison:', error);
                            });
                
            }
            else{
                res.json({message:"User Not Found!!"});
            }
         
        }
        catch(error){
            res.status(500).json({loginstatus: false, message:"internal server error"});
            console.log(error)
        }
    }
    
const register  = async (req,res) => {
     //save data here to db 
      
        try{
            let lowerCaseStr = req.body.email.toLowerCase();
            console.log(req.body.password)
            hashPassword(req.body.password)
             
            .then(hashpass => {
                const newEntry = new UserDetail({
                    fname: req.body.fname,
                    lname: req.body.lname,
                    email: lowerCaseStr,
                    phone: req.body.phone,
                    password: hashpass,
                    cnf_password: hashpass});
                    return newEntry.save();
                })
                .then(savedUser => {
                    console.log(savedUser);
                    res.json({ message: "Registered successfully. Please Login to you account" });
                })
                .catch(err=>{
                    console.log(err);
                });
                
            }
            catch(error){
                console.error('Error:', error);
            };
        
    }
    
//hashing function 

function hashPassword(password) {
    const saltRounds = 10;

    return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds)
            .then(hash => {
               // console.log(hash);
                resolve(hash);
            })
            .catch(err => {
                console.error(err);
                reject(err);
            });
    });
}

function comparehashPass(password,hashedsavedpass){
    return new Promise((resolve, reject) => {
    bcrypt.compare(password,hashedsavedpass)
    .then(result =>{
       // console.log(result)
        resolve(result)   
    })
    .catch(err =>{
        console.log(err)
        reject(err)
    })
})
}
module.exports={register,login};









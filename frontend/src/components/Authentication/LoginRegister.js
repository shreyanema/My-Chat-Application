import React , { useState, useEffect }  from 'react';
import {useNavigate} from "react-router-dom";
import './login_register.css'
import chatbox from './assets/chatbox.png'



const LoginRegister = () => {

//storing tde input value in state variable
const [action,setAction] = useState("Register");
const [formvalues,setUser] = useState({ fname:"",lname:"",email:"",phone:"",password:"",cnf_password:"",L_email:"", L_password:""});
const [formerrors,setUserErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);
const [BackendResponse,SetBackendResponse] = useState();


const navigate = useNavigate(); 


let inputName, inputValue;
const handleInputs = (e) => {
    inputName = e.target.name;
    inputValue= e.target.value;
    setUser({...formvalues,[inputName]:inputValue});
    };
   
const handleSubmit = async(e) => {
    e.preventDefault();
   // const {fname,lname,email,phone,password,cnf_password} = formvalues;
    setUserErrors(validate(formvalues));
    setIsSubmit(true);
    
      
};

const  L_handleSubmit = async(e) =>{
    e.preventDefault();
    console.log("Hello")
    setUserErrors(L_validate(formvalues));
    setIsSubmit(true);
    console.log("bbb")
}
  //send a form data to backend
useEffect(() => {
    console.log(formerrors);
    if(Object.keys(formerrors).length === 0 && isSubmit){

        if(action ==="Login")
        {
            const {L_email,L_password} = formvalues;
                console.log(L_email);
                console.log(L_password);
                fetch("api/login",{
                    method: 'POST',
                    headers: {
                        'Content-Type' : "application/json",
                    },
                    body: JSON.stringify({L_email,L_password})
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    //SetBackendResponse(data.message);
                    if(data.loginstatus){
                       
                        navigate('/Welcome');
                    }
                })
                .catch(error => {
                    console.error("Error:" ,error);
                
                });
            

        }
        else{
                const {fname,lname,email,phone,password,cnf_password} = formvalues;
                console.log(formvalues);
                fetch('/api/register',{
                    method: 'POST',
                    headers: {
                        'Content-Type' : "application/json",
                    },
                    body: JSON.stringify({fname,lname,email,phone,password,cnf_password})
                })
                .then(response => response.json())
                .then(data => {
                   SetBackendResponse(data.message);
                   
                })
                .catch(error => {
                    console.error("Error:" ,error);
                
                });
    }
    }

},[formerrors]);


return(

    <div className='pagebody'>
        <div className="split left">
            <div className="centered">
            { action==="Register" ? 
                <div className='RegisterBox'>         
                    <div className='formbox'> 
                    <h2>Register</h2> 
                        <form metod = "POST">
                        <input type ="text" placeholder='First Name' name ="fname"  className="forminput" value={formvalues.fname} onChange={handleInputs} required/> 
                        <small className='warning' name="warningFname">{formerrors.fname}</small><br/>
                        <input type ="text"  placeholder='Last Name' name ="lname" className="forminput" value={formvalues.lname} onChange={handleInputs} />
                        <br/>
                        <input type ="email" placeholder="Enter Email" name ="email" className="forminput" value={formvalues.email} onChange={handleInputs} required/>
                        <small className='warning' name='warningemail'>{formerrors.email}</small><br/>
                        <input type ="number"  placeholder="Emter Phone Number" name ="phone" className="forminput" value={formvalues.phone} onChange={handleInputs} required/>
                        <small className='warning' name='warningphone'>{formerrors.phone}</small><br/>
                        <input type ="password"  placeholder="Enter Password" name ="password" className="forminput" value={formvalues.password} onChange={handleInputs} required/>
                        <small className='warning' name='warningpassword'>{formerrors.password}</small><br/>
                        <input type ="password" placeholder="Confirm Passoword" name ="cnf_password" className="forminput" value={formvalues.cnf_password} onChange={handleInputs} required/>
                        <small className='warning' name='warningcnf_password'>{formerrors.cnf_password}</small><br/>
                        <input className="Submit" type = "button" name ="submit" value = "Register" onClick={handleSubmit} />
                        </form>
                    </div>
                    <h5>Already Registered? <button className='Login' style={{color: '#164863'}} onClick={()=>{setAction("Login"); setIsSubmit(false); SetBackendResponse(null)}}>Login</button> </h5>       
                    <div style={{color: 'green'}}>{BackendResponse}</div>
                </div> 

                :

                <div className='LoginBox'>         
                    <div className='formbox'> 
                    <h2>Login</h2> 
                        <form method = "POST">
                        <input type ="email" placeholder="Enter Email" name ="L_email" className="forminput" value={formvalues.L_email} onChange={handleInputs} required/>
                        <small className='warning' name='warningemaillogin'>{formerrors.L_email}</small><br/>
                        <input type ="password"  placeholder="Enter Password" name ="L_password" className="forminput" value={formvalues.L_password} onChange={handleInputs} required/>
                        <small className='warning' name='warningpasswordlogin'>{formerrors.L_password}</small><br/>
                        <br/>
                        <input className="Submit" type = "button" name ="submit" value = "Login" onClick={L_handleSubmit} />
                        </form>
                    </div>
                    <h5>Not a member? <button className='Register' style={{color: '#164863'}} onClick={()=>{setAction("Register"); setIsSubmit(false); SetBackendResponse(null)}}>Register</button> </h5>       
                    <div>{BackendResponse}</div>
                </div> 
                }
                
               </div>
        </div>
        <div className="split right">
            <div className="centered">  
                <img src={chatbox} className="imagecol" alt='...'/>
            </div>
        </div>       
    </div>

)};

// validations-------------------------------  
const validate=(values) =>{
    const errors = {}

    //Name Validations
    const Nameregex = /^[A-Za-z]+$/;
    const Emailregex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

    if (!values.fname){
        errors.fname = "First Name is required!";
    }
    else if(!Nameregex.test(values.fname)){
        errors.fname = "Enter valid Name!";
    }
    else if(values.fname.length > 15){
        errors.fname = "maxlength is 15";
    }
    else{
        console.log("name validated");
    }

    //Email Validations
    if(!values.email){
        errors.email = "Email is required!";

    }
    else if(!Emailregex.test(values.email)){
        errors.email = "Enter valid Email!";
    }
    else{
        console.log("email validated");
    }

    //number validation

    if (!values.phone){
        errors.phone = "Phone number is required!";
    }  
    else if(values.phone.length !== 10 ){
        errors.phone = "Enter a valid number";
    }
   
    //password validation
    if (!values.password){
        errors.password = "Password is required!";
    }  
    else if(values.password.length < 10){
        errors.password = "Password shoud be at least 10 characters";
    }
    
    //confirm password

    if(!values.cnf_password){
        errors.cnf_password = "please re-type password";
    }
    else if( values.cnf_password !== values.password){
        errors.cnf_password = "Passowrd didn't match";
    }
   

    return errors
};

const L_validate = (values) =>{
    const errors = {}
    if (!values.L_email){
        errors.L_email = "Please enter email";
    }
    if(!values.L_password){
        errors.L_password = "Please enter password";
    }
    return errors
};

export default LoginRegister; 

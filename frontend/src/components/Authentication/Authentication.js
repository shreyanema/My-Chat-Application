import React , { useState, useEffect }  from 'react';
import {useNavigate} from "react-router-dom";
import {Segment,Form,Header,Icon,Message,Input,Button,Grid,Divider } from 'semantic-ui-react';


const Authentication = () => {
const [action,setAction] = useState("Login");
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
                    SetBackendResponse(data.message);
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


    return (

        
         
        <div style={{ background:'black'}}>
            
            <Header as='h2'attached='top' style={{color:'#FF8C94 ', background:'#DCEDC2'}} >
                Welcome to Let's Chat
            </Header>
            { action==="Login" ?
            <Segment placeholder  >
            
                <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                <Header as='h3' style={{ color:'teal'}} >
                    Login
                </Header>
                <Divider clearing />
                    <Form>
                    <Form.Field
                        icon='mail'
                        label='Enter Email'
                        iconPosition = 'left'
                        control={Input}
                        placeholder='Enter Email'
                        name ="L_email"
                        value={formvalues.L_email} 
                        onChange={handleInputs} 
                        error ={formerrors.L_email ? { content: formerrors.L_email, pointing: 'above' } : null}
                       
                    />
                  
              
            
                    <Form.Input
                        icon='mail'
                        label='Enter Password'
                        iconPosition = 'left'
                        type = 'password'
                        control={Input}
                        placeholder='Enter Password'
                        name ="L_password"
                        value={formvalues.L_password} 
                        onChange={handleInputs} 
                        error ={formerrors.L_password ? { content: formerrors.L_password, pointing: 'above' } : null}

                    />
                    <Button content='Login' onClick={L_handleSubmit}   style={{color:'white', background:'teal'}}  />
                    </Form>
                { BackendResponse ?
                <Message>
                    <Message.Header>
                    {BackendResponse}
                    </Message.Header>
                </Message> :
                <div></div>}

               
                </Grid.Column>

                <Grid.Column verticalAlign='middle'>
                    <Button content='Sign up' icon='signup' size='big' onClick={()=>{setAction("Register"); setIsSubmit(false); SetBackendResponse(null)}}  style={{color:'black ', background:'#FF8C94'}}/>
                </Grid.Column>
                </Grid>

                <Divider vertical><Icon name='comment outline' size='big' /></Divider>
                </Segment>
            :

            <Segment placeholder>
            
            <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
            <Header as='h3' >
                Register
            </Header>
            <Divider clearing />
                <Form>
                <Form.Group widths='equal'>
                <Form.Field
                    icon='user'
                    label='Enter First Name'
                    iconPosition = 'left'
                    control={Input}
                    placeholder='Name'
                    name ="fname"
                    value={formvalues.fname} 
                    onChange={handleInputs} 
                    error ={formerrors.fname ? { content: formerrors.fname, pointing: 'above' } : null}
                />
        
                <Form.Input
                    icon='user'
                    label='Enter Lastname'
                    iconPosition = 'left'
                    control={Input}
                    placeholder='Enter Lastname'
                    name ="lname"
                    value={formvalues.lname} 
                    onChange={handleInputs} 
                    error ={formerrors.lname ? { content: formerrors.lname, pointing: 'above' } : null}

                />
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input
                    icon='mail'
                    label='Enter Email'
                    iconPosition = 'left'
                    control={Input}
                    type= 'email'
                    placeholder='Enter Email'
                    name ="email"
                    value={formvalues.email} 
                    onChange={handleInputs} 
                    error ={formerrors.email ? { content: formerrors.email, pointing: 'above' } : null}

                />
                 <Form.Input
                    icon='phone'
                    label='Enter Phone Number'
                    iconPosition = 'left'
                    control={Input}
                    type='number'
                    placeholder='Enter Enter Phone Number'
                    name ="phone"
                    value={formvalues.phone} 
                    onChange={handleInputs} 
                    error ={formerrors.phone ? { content: formerrors.phone, pointing: 'above' } : null}

                />
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input
                    icon='lock'
                    label='Enter Password'
                    iconPosition = 'left'
                    control={Input}
                    type= 'password'
                    placeholder='Enter Password'
                    name ="password"
                    value={formvalues.password} 
                    onChange={handleInputs} 
                    error ={formerrors.password ? { content: formerrors.password, pointing: 'above' } : null}

                />
                 <Form.Input
                    icon='lock'
                    label='Re-Enter Password'
                    iconPosition = 'left'
                    control={Input}
                    type= 'password'
                    placeholder='Confirm Password'
                    name ="cnf_password"
                    value={formvalues.cnf_password} 
                    onChange={handleInputs} 
                    error ={formerrors.cnf_password ? { content: formerrors.cnf_password, pointing: 'above' } : null}

                />
                </Form.Group>
                <Button content='Sign up' onClick={handleSubmit}  style={{color:'white', background:'teal'}}  />
                </Form>
                
                {BackendResponse ?
                <div>
                <Divider clearing />
                <Message>
                    <Message.Header>
                    {BackendResponse}
                    </Message.Header>
                </Message> </div>:
                <div></div>}
            </Grid.Column>

            <Grid.Column verticalAlign='middle'>
                <Button content='Log in' icon='sign-in' size='big' onClick={()=>{setAction("Login"); setIsSubmit(false); SetBackendResponse(null)}} style={{color:'black ', background:'#FF8C94'}} />
            </Grid.Column>
            </Grid>



            <Divider vertical><Icon name='comment outline' size='big' /></Divider>
            </Segment>
            
            }
               
           
        </div>
    


)};

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
        errors.cnf_password = "Password didn't match";
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


export default Authentication

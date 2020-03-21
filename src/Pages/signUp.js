import React from 'react'
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button  from '@material-ui/core/Button';
import Textfield from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';
import * as Icon from 'react-feather';
import { makeStyles } from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import Firebase from '../Firebase/Config'

const useStyle= makeStyles(theme=>({
 body:{
    backgroundColor:'#f1f1f1', 
 },

root:{
    marginTop: theme.spacing(8),
    display:'flex',
    justifyContent:'center',
    flexDirection:'column'
},
container:{
    backgroundColor:'#f1f1f1'
},
avatar:{
    marginTop:theme.spacing(3),
    alignSelf:'center',
   width: theme.spacing(7),
   height: theme.spacing(7),
   backgroundColor:'#000000'
},
other:{
marginTop:theme.spacing(3)
},
submit:{
marginTop:theme.spacing(5),
alignSelf:'center',
backgroundColor:'#000000',
fontFamily:'Titillium Web',
color:'#ffffff',
fontSize:20
}
}))
 


const SignUp = (props) => {
    const classes =useStyle()
    const [values,setValues] = React.useState(
        {
            email:'',
            password:'',
            passwordII:''
        }
    )
    const takeInput = name =>event =>{
       setValues({...values,[name]: event.target.value})
    }
    const submitInput = ()=>{
       Firebase.auth().createUserWithEmailAndPassword(values.email,values.password).then(()=>{
       props.history.push('/home')
       console.log ('successful')
       }).catch(()=>{
       alert ('not done')
       })
    }
    const isValid = 
    values.password === values.passwordII ||
    values.email === '' ;
   
    return (
       <> 
            <Container  maxWidth='xs'
            className={classes.container}
            >
                <div className={classes.root}>
                <Avatar
                className={classes.avatar}>
                <Icon.LogIn />
                </Avatar>
                
                <form
               
                 className={classes.other}>
                    <Textfield
                    variant='outlined'
                    id='email'
                    type = 'email'
                    placeholder='Email'
                    onChange = {takeInput}
                    fullWidth
                    className={classes.other}
                    />
                    <Textfield
                    variant='outlined'
                    id='password'
                    type = 'password'
                    placeholder='Password'
                    onChange= {takeInput}
                    fullWidth
                    className={classes.other}
                    />
                     <Textfield
                    variant='outlined'
                    id='passwordII'
                    type = 'password'
                    placeholder='Confirm Password'
                    fullWidth
                    className={classes.other}
                    />
                    <Button
                    className={classes.submit}
                    variant='contained'
                    type = 'submit'
                    fullWidth
                   onClick = {submitInput}
                    >
                        Sign up
                    </Button>
                </form>
                <Typography
                 className={classes.other}
                >
                  Proceed
                </Typography>
                </div>
            </Container>
      </> 
      );
}
 
export default withRouter(SignUp);
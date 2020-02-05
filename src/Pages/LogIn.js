import React from 'react'
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button  from '@material-ui/core/Button';
import Textfield from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';
import * as Icon from 'react-feather';
import { makeStyles } from '@material-ui/core';
import {Link} from 'react-router-dom'

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

}
}))
 


const LogIn = () => {
    const classes =useStyle()
    return (
       <> 
            <Container  maxWidth='xs'
            className={classes.container}
            >
                <div className={classes.root}>
               
                <Avatar
                className={classes.avatar}>
                <Icon. LogIn/>
                </Avatar>
                
                <form
                 className={classes.other}>
                    <Textfield
                    variant='outlined'
                    id='email'
                    placeholder='Email'
                    fullWidth
                    className={classes.other}
                    />
                    <Textfield
                    variant='outlined'
                    id='password'
                    placeholder='Password'
                    fullWidth
                    className={classes.other}
                    />
                    <Button
                     className={classes.submit}
                    variant='contained'
                    style ={{fontFamily:'Titillium Web',
                    color:'#ffffff',
                     fontSize:20}}
                    fullWidth
                    component ={Link } to ='/home'
                    >
                        Log in 
                    </Button>
                </form>
                <Typography
                 className={classes.other}
                >
                    Create account
                </Typography>
                </div>
            </Container>
      </> 
      );
}
 
export default LogIn;
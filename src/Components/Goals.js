import React,{useEffect} from 'react';
import Home from '../Pages/Home'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Textfield from '@material-ui/core/TextField';
import * as Icon from 'react-feather';
import 'react-circular-progressbar/dist/styles.css';
import {makeStyles} from '@material-ui/core/styles';
import Circular from '../Fragments/Progress';
import Firebase from '../Firebase/Config'

const useStyles = makeStyles(theme=>({
   content:{
      marginTop:theme.spacing(15),
     
   },
   root:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      
   },
   fab:{
      backgroundColor:'#000000',
      alignSelf:'flex-end'
   },
   icon:{
       color:'#ffffff',
       
   },
   modal:{
    width: 600,
    height:500,
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    marginTop:theme.spacing(8),
    marginLeft:theme.spacing(2)
   },
   modalPaper:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignSelf:'center'
   },
   other:{
      marginTop:theme.spacing(5)
   },
   typography:{
      
      fontFamily:'Merienda',
      fontSize: '40px'
   },
   circular:{
      width:200,
      height:200,
   }
   
}))

const Goals = (props) => {

   const classes= useStyles();
   const [open,setOpen]=React.useState(false);
   const [values,setValues] = React.useState({
        title:'',
        amount:'',
        time:''
   })
   

   
     
  
  const submitValues = async (event)=>{
     event.preventDefault();
     try{
      await Firebase.firestore().collection('Goal').doc ().set({
         goalAmount : values.amount,
         goalTime : values.time,
         goalTitle : values.title
      })
      setOpen(false) 
      setValues({})
     } catch (error){
      alert(error)
     }
  
  
    }
     

   const openModal=()=>{
      setOpen(true)
   }
   const handleChange =name=>event=>{
       setValues({...values,[name]:event.target.value})
   }
   const GoalModal=(
      <div 
      >
         <Modal
         onClose={()=> setOpen(false)}
         open={open}
         className={classes.modalPaper}
         >
          <div className={classes.modal}>
          <form  autoComplete='off'
                 onSubmit = {submitValues}
                 >
                
                    <Textfield
                    variant='outlined'
                    id='title'
                    placeholder='title'
                    value={values.title}
                    onChange={handleChange('title')}
                    fullWidth
                    className={classes.other}
                    /><br/><br/>
                    <Textfield
                    variant='outlined'
                    id='Amount'
                    placeholder='Amount'
                    value={values.amount}
                    onChange={handleChange('amount')}
                    fullWidth
                    className={classes.other}
                    /><br/><br/>
                     <Textfield
                    variant='outlined'
                    id='time'
                    placeholder='time'
                    value={values.time}
                    onChange={handleChange('time')}
                    fullWidth
                    className={classes.other}
                    /><br/><br/>
                    <Button
                     className={classes.icon}
                    variant='contained'
                    type= 'submit'
                    >
                        submit
                    </Button>
                </form>
                </div> 
         </Modal>
      </div>
   )
   const content=(
      <div
        className={classes.root}
      >
         <Typography
         variant='h5'
         className={classes.typography}>
           {values.title? `Goal: ${values.title }` :'Set your goal'}
         </Typography>
         <br/>
         <Typography
         variant='h5'
         className={classes.typography}>
           {values.amount? `Amount: ${values.amount }` : null}
         </Typography>
         <br/>
         <Typography
         variant='h5'
         className={classes.typography}>
           {values.time? `Time : ${values.time }` : null}
         </Typography>
         <Fab
         className={classes.fab}
         variant='round'
         onClick={openModal}
         >
         <Icon.Plus
         className={classes.icon}/>
         </Fab>
       {values.amount && values.time ? <div className={classes.circular}>
                        <Circular/>
                           </div> : null
           
      }  
     
      </div>
   )
    return ( 
        <div className={classes.content}>
           <Home
           Appbarname='Goals'
           Content = {content}
           GoalModal={GoalModal}
           //circularProgress={CircularProgressbar}
           />
           
        </div>
     );
}
 
export default Goals;
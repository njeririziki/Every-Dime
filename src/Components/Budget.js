import React from 'react';
import Home from '../Pages/Home';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
   content:{
      marginTop:theme.spacing(15),
   },
}))

const Budget = () => {
    const classes=useStyles()
    return ( 
        <div className={classes.content}>
             <Home
            Appbarname='Budget'
            Content= 'Create a Budget'/>
        </div>
     );
}
 
export default Budget;
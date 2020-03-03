import React from 'react';
import Home from '../Pages/Home';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
   content:{
      marginTop:theme.spacing(15),
   },
}))
const ExpenseTracker = (props) => {
   const classes=useStyles()
    return ( 
        <div className={classes.content}>
            <Home
            Appbarname='Expenses'
            Content= 'Track your daily expenses'/>

        </div>
     );
}
 
export default ExpenseTracker;
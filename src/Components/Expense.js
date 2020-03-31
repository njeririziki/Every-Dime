import React from 'react';
import Home from '../Pages/Home';
import {makeStyles} from '@material-ui/core/styles'; 
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme=>({
   content:{
      marginTop:theme.spacing(15),
   },
}))
const ExpenseTracker = (props) => {
   const classes=useStyles();

   const expenseContent=(
      <div>
     <form>
        
     </form>
      </div>
   )
    return ( 
        <div className={classes.content}>
            <Home
            Appbarname='Expenses'
            Content= {expenseContent}  />

        </div>
     );
}
 
export default ExpenseTracker;
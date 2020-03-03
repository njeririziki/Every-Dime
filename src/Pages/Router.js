import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Home';
import LogIn from './LogIn';
import Goals from '../Components/Goals';
import Expenses from '../Components/Expense';
import Budget from '../Components/Budget'
import SignUp from './signUp'

const Router = () => {
    return (
        <BrowserRouter>
        <div>
            <Route path='/' component={LogIn} exact />
            <Route path='/signup' component={SignUp} exact />
            <Route path='/home' component={Home} exact />
            <Route path='/goals' component={Goals} exact />
            <Route path='/budget' component={Budget} exact />
            <Route path='/expenses' component={Expenses} exact />
            

        </div>
        </BrowserRouter>
      );
}
 
export default Router;

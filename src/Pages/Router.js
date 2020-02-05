import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Home';
import LogIn from './LogIn';
import Goals from '../Components/Goals'

const Router = () => {
    return (
        <BrowserRouter>
        <div>
            <Route path='/' component={LogIn} exact />
            <Route path='/home' component={Home} exact />
            <Route path='/goals' component={Goals} exact />
        </div>
        </BrowserRouter>
      );
}
 
export default Router;

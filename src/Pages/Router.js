import React,{ useContext} from 'react';
import {BrowserRouter,Route, Redirect,Switch} from 'react-router-dom'
import Home from './Home';
import LogIn from './LogIn';
import Goals from '../Components/Goals';
import Expenses from '../Components/Expense';
import Budget from '../Components/Budget'
import SignUp from './signUp'
import User from '../Components/UserProfile'
import AuthContext ,{AuthProvider} from '../Firebase/Context'

// const  Authenticated= () => 
//      (
//         <BrowserRouter>
//         <div>
//             <Route path='/' component={LogIn} exact />
//             <Route path='/signup' component={SignUp} exact />
//             <Route path='/home' component={Home} exact />
//             <Route path='/goals' component={Goals} exact />
//             <Route path='/budget' component={Budget} exact />
//             <Route path='/expenses' component={Expenses} exact />
//         </div>
//         </BrowserRouter>
//       );



//  class Router extends Component {
//      constructor(props){
//          super(props)
//         this.state = {
//             user: null
//            }
//      }
//      componentDidMount(){
//          this.listener= auth.onAuthStateChanged(
//              user => {
//               user?   this.setState({user}): this.setState({user:null})
//              }
//          )
//      }
//      componentWillUnmount(){
//          this.listener();
//      }
//      render() { 
//          return ( 
//              <div>
//              {this.state.user? <Authenticated/>: <UnAuthenticated/> }
//              </div>
//           );
//      }
//  }
  

const Routing = () => {
    const {user} = useContext(AuthContext);
    const  UnAuthenticated= (
        <div>
            
                <Route path='/' component={LogIn} exact />
                <Route path='/signup' component={SignUp} exact />
          
        </div>
    );
    const PrivateRoutes = (
        <div>
         
     </div>
    )
    return ( 
        <div>
         <BrowserRouter>
        <div>
        <Switch>
             <Route exact path = '/'
            render = { ()=> (user?
            <Home/>: <Redirect to= {'/login'} /> 
            )}/>
            <Route path='/login' component={LogIn} exact />
            <Route path='/signup' component={SignUp} exact />
            <Route path='/goals' component={Goals} exact />
            <Route path='/budget' component={Budget} exact />
            <Route path='/expenses' component={Expenses} exact />
            <Route path='/user' component={User} exact />
            </Switch>
        </div>
       </BrowserRouter>   
        </div>
     );
}
const Router = () => {
    
    return ( 
        <AuthProvider >
          <Routing/> 
        </AuthProvider>
     );
}
 
export default Router;
 


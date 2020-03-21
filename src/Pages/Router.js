import React,{ useContext} from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Home';
import LogIn from './LogIn';
import Goals from '../Components/Goals';
import Expenses from '../Components/Expense';
import Budget from '../Components/Budget'
import SignUp from './signUp'
//import {auth} from '../Firebase/Config'
import AuthContext ,{AuthProvider} from '../Firebase/Context'

const  Authenticated= () => 
     (
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

const  UnAuthenticated= () => (
    <div>
        <BrowserRouter>
        <div>
            <Route path='/' component={LogIn} exact />
            <Route path='/signup' component={SignUp} exact />
        </div>
        </BrowserRouter>
    </div>
)

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
    const {user} = useContext(AuthContext)
    return ( 
        <div>
            {user? <Authenticated/>: <UnAuthenticated/>}
        </div>
     );
}
const Router = () => {
    return ( 
        <AuthProvider>
            <Routing/>
        </AuthProvider>
     );
}
 
export default Router;
 


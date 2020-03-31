import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Firebase from '../Firebase/Config';
import Home from '../Pages/Home';

const UserProfile = (props) => {

    // Firebase.firestore().collection('Goal').doc().get() 
    // .then((snapshots) => {
    //     snapshots.docs.forEach(doc => {
    //         console.log(doc.data())
    //     })
    // })
  const  content =(
      <div>
        <Avatar
        size= '200'/>
        <p>User Name</p>
      </div>
  )  

    return ( <div>
        <Home
        AppbarName = ''
        Content = {content}
        />
       
    
    </div> );
}
 
export default UserProfile;
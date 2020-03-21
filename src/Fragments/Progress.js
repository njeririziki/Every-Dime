import React from 'react';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// const useStyles =() =>buildStyles({
//     root:{
//     rotation : 0.25,
//     textSize:'8px',
//     strokeLinecap:'butt',
//     pathTransitionDuration: 0.5,
//     pathColor: '#880e4f',
//     trailColor:'#d6d6d6',
//     backgroundColor: '#3e98c7',
//     }
    
// })



const CircularProgress = () => {
    const percentage = 75;
    
    return (  
        <div >
        <CircularProgressbar
       value = {percentage}
       text={`${percentage}%`}
       strokeWidth={5}
       styles ={ buildStyles({
           rotation : 0,
           textSize:'20px',
           strokeLinecap:'butt',
           pathTransitionDuration: 0.5,
           pathColor: `#e91e63`,
           trailColor:'#d6d6d6',
           textColor: '#000000',
       })
       }
       />
         </div>       
    );
}
 
export default CircularProgress;

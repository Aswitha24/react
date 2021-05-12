import React from 'react';
import entry from './entry.jpg';

const Home = () => {
  return(
    <div className="fda">
        <div className="home"> 
        
        {/* <marquee style={{ color: 'red', fontSize: '2em' }}>WELCOME TO FOOD DELIVERY APPLICATION</marquee> */}
      </div>
      
      <br></br>
     <div align="center">
         <h5>SIGNUP or LOGIN through our website and ENJOY the services...!! Have a Good Day!</h5>
     </div>
     <br></br>
     <div align="center">
     <img src={entry} alt="entry" height={350} width={500} text={"2em"} />  
     </div>
      
     
       </div>
   
    
  );
};
export default Home;
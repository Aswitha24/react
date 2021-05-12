import React from 'react'
import ProjectItemComponent from './ProjectItemComponent';
import fda from './fda.png';
import Food from './Food.jpg';
import empty from './empty.png';


class Dashboard extends React.Component {

  
    render() {
        return (
                  
            <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        
                   
                    {/* <marquee style={{ color: 'red', fontSize: '2em' }}>WELCOME TO FOOD DELIVERY APPLICATION</marquee> */}
                    <hr/>
                    <div className="theory" align="center">
                        <h6>Online food delivery services enabled us to order food at the comfort of our home, compare prices and conveniently access the services. The online food delivery services are boosting the option of choosing meals,snacks from a wide variety of restaurants with a single tap of our smartphones...!!</h6>
                        
                        </div>
                        <br></br>
                    <div align="center"> 
                    <img src={Food} alt="Food" height={350} width={500} text={"2em"} />
                    <img src={empty} alt="empty" height={300} width={100} text={"2em"} position={'right'}/>
                        <img src={fda} alt="fda" height={350} width={500} text={"2em"} position={'right'}/> 
                    </div>
                   
                       <ProjectItemComponent/>
                    </div>
                </div>
            </div>
         </div>
        )
    }
}
export default Dashboard;
import React ,{component} from  'react';
import Natification from  './Natification';
import ProjectList from '../projets/ProjectList';

const Dashboard=()=> {
        return (
            <div className="dashboard container">
                <div className="row">
                   <div className="col s12 m6">
                       <ProjectList />
                   </div>
                   <div className="col s12 m5"></div>
                   <Natification />
                </div> 
            </div>
        )
    
      
 
}
export default Dashboard;
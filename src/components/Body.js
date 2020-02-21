import React,{useState} from 'react';

import './Body.scss';
import Eventcard from './Eventcard';
import Dateuser from './Dateuser';
import Information from './Information';
import Activity from './Activity'; 
import Activitytab from './Activitytab';
import Gedung from './Gedung';

const Body = (props) => {

    const bodyView = props.view;
    function showMiniNav(){
        switch(bodyView){
            case "user":
                return(
                    <Dateuser />
                )
            case "information":
                return(
                    <Dateuser />
                )
            case "gedung":
                return(
                    <Dateuser />
                )
                break;
            case "activity":
                return(
                    <Activitytab />
                )
                break;
            case "activityall":
                return(
                    <Activitytab />
                )
                break;
            default:
                return(
                    <div>

                    </div>
                )
        }
    }
    function showBody(){
        switch(bodyView){
            case "user":
                return(
                    <div>
                        <div className="event-title">
                            <div>2020</div>
                            <div>Februari</div>
                        </div>
                        <Eventcard />
                    </div>
                );
                break;
            case "information":
                return(
                    <div>
                        <Information />    
                    </div>
                );
                break;
            case "activity":
                return(
                    <div>
                        <Activity view="proses"/>
                    </div>
                );
                break;
            case "activityall":
                return(
                    <div>
                        <Activity view="semua"/>
                    </div>
                );
                break;
            case "gedung":
                return(
                    <div>
                       <Gedung />
                    </div>
                );
                break;

        }
    }
        
        return ( 
            <div>
                
                <div className={`${bodyView}-body`}>
                {showMiniNav()}
                <div className="inside">     
                <div className="event-container">
                {showBody()}
                </div>
            
                 </div>
            </div>
                
            </div>
         );
}
 
export default Body;
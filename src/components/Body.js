import React,{useState} from 'react';

import './Body.scss';
import Eventcard from './Eventcard';
import Dateuser from './Dateuser';
import Information from './Information';
import Activity from './Activity'; 
import Activitytab from './Activitytab';
import Gedung from './Gedung';
import Admin from './Admin';
import Admincard from './Admincard';

const Body = (props) => {

    let data = {
        'gedung' : ['A','B','C','D','E','F'],
        'lantai' : ['1','2'],
        'ruang' : ['A1.1']
    }

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
            case "adminhome":
                return(
                    <Admincard />
                )
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
                            <div className="text-atas">2020</div>
                            <div className="text-bawah">Februari</div>
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
                       <Gedung data={props.data}/>
                    </div>
                );
                break;
            case "adminhome":
                return(
                    <div>
                        <Admin view="'home" data={data} />
                    </div>
                )

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
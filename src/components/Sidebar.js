import React,{useState} from 'react';
import "./Sidebar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll, faCalendar, faBars, faHome, faSignOutAlt, faBuilding} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {

    const[activeInfo,setActiveInfo] = useState('#B9BAC3');
    let[activeHome,setActiveHome] = useState('#B9BAC3');
    let[activeActivity,setActiveActivity] = useState('#B9BAC3');

    let view = props.view;
    // async function checkKond(){
    //     setCount(1);
    //     console.log
    // }
    
    // checkKond();
    
        return ( 
            <div className={`${props.view}-sidebar`}>
                <div className="menu-sidebar">
                    <ul>
                        <div className="title-sidebar">{props.text}</div>
                            {view==="admin"?<div className="men"> 
                                <NavLink to="/info" activeClassName="selected" style={{color:'black',textDecoration:'none'}}><li><FontAwesomeIcon icon={faHome} color={activeInfo} style={{width:18}}/><span>Home</span></li></NavLink>
                                <li><NavLink to="/" style={{color:'black',textDecoration:'none'}}><FontAwesomeIcon icon={faScroll} color={activeHome} style={{width:18}}/><span>Orderan</span></NavLink></li>
                                <li><NavLink to="/activity" style={{color:'black',textDecoration:'none'}}><FontAwesomeIcon icon={faBuilding} color={activeActivity} style={{width:18}} /><span>Ruangan</span></NavLink></li>
                                <li><NavLink to="/login" style={{color:'black',textDecoration:'none'}}><FontAwesomeIcon icon={faSignOutAlt} color={activeActivity} style={{width:18}} /><span>Logout</span></NavLink></li>
                            </div>
                            :
                            <div>
                                <li><NavLink to="/info" activeClassName="selected"><FontAwesomeIcon icon={faBars} color={activeInfo}/></NavLink></li>
                                <li><NavLink to="/"><FontAwesomeIcon icon={faCalendar} color={activeHome} disabled="true"/></NavLink></li>
                                <li><NavLink to="/activity"><FontAwesomeIcon icon={faScroll} color={activeActivity} /></NavLink></li>
                            </div>}
                    </ul>
                </div>
            </div>
         );
}
 
export default Sidebar;
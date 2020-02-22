import React,{useState, useEffect} from 'react';
import "./Sidebar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll, faCalendar, faBars, faHome, faSignOutAlt, faBuilding, faLongArrowAltUp} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {

    let activeInfo = '#B9BAC3';
    let activeHome = '#B9BAC3';
    let activeActivity = '#B9BAC3';
    let activeAdminHome = '#B9BAC3';
    let activeAdminOrderan = '#B9BAC3';
    let activeAdminRuangan = '#B9BAC3'

    let view = props.view;
    // async function checkKond(){
    //     setAngka(1);
    //     console.log(angka)
    // }
    let locationNow = window.location.pathname
    // checkKond();
     function checkSidebar(){
        if(locationNow==='/'){
           activeHome = '#000'
        }else if(locationNow.includes('/activity')){
            activeActivity = '#000'
        }else if(locationNow.includes('/info')){
            activeInfo = '#000'
        }else if(locationNow==='/admin'){
            activeAdminHome = '#000';
        }
    }
    
    checkSidebar()

        return ( 
            <div className={`${props.view}-sidebar`}>
                <div className="menu-sidebar">
                    <ul>
                        <div className="title-sidebar">{props.text}</div>
                            {view==="admin"?<div className="men"> 
                                <div><NavLink to="/admin" activeClassName="selected" style={{color:'black',textDecoration:'none'}}><li><FontAwesomeIcon icon={faHome} color={activeAdminHome} style={{width:18}}/><span style={{color:{activeAdminHome},fontWeight:700}}>Home</span></li></NavLink></div>
                                <li><NavLink to="/admin/order" style={{color:'black',textDecoration:'none'}}><FontAwesomeIcon icon={faScroll} color={activeHome} style={{width:18}}/><span>Orderan</span></NavLink></li>
                                <li><NavLink to="/admin/gedung" style={{color:'black',textDecoration:'none'}}><FontAwesomeIcon icon={faBuilding} color={activeActivity} style={{width:18}} /><span>Ruangan</span></NavLink></li>
                                <li onClick={()=>localStorage.removeItem('token')}><NavLink to="/login" style={{color:'black',textDecoration:'none'}}><FontAwesomeIcon icon={faSignOutAlt} color={activeActivity} style={{width:18}} /><span>Logout</span></NavLink></li>
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
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
        }else if(locationNow.includes('/admin/order')){
            activeAdminOrderan = '#000';
        }else if(locationNow==='/admin/gedung'){
            activeAdminRuangan = '#000';
        }
    }
    
    checkSidebar()

        return ( 
            <div className={`${props.view}-sidebar`}>
                <div className="menu-sidebar">
                    <ul>
                        <div className="title-sidebar">{props.text}</div>
                            {view==="admin"?<div className="men"> 
                                <div><NavLink to="/admin" style={{color:'black',textDecoration:'none'}}><li><FontAwesomeIcon icon={faHome} color={activeAdminHome} style={{width:18}}/><span style={{color:`${activeAdminHome}`,fontWeight:600}}>Home</span></li></NavLink></div>
                                <li><NavLink to="/admin/order" style={{color:'black',textDecoration:'none'}}><FontAwesomeIcon icon={faScroll} color={activeAdminOrderan} style={{width:18}}/><span style={{color:`${activeAdminOrderan}`,fontWeight:600}}>Orderan</span></NavLink></li>
                                <li><NavLink to="/admin/gedung" style={{color:'black',textDecoration:'none'}}><FontAwesomeIcon icon={faBuilding} color={activeAdminRuangan} style={{width:18}} /><span style={{color:`${activeAdminRuangan}`,fontWeight:600}}>Ruangan</span></NavLink></li>
                                <li onClick={()=>localStorage.removeItem('token')}><NavLink to="/login" style={{color:'black',textDecoration:'none'}}><FontAwesomeIcon icon={faSignOutAlt} color='#B9BAC3' style={{width:18}} /><span style={{color:'#B9BAC3',fontWeight:600}}>Logout</span></NavLink></li>
                            </div>
                            :
                            <div>
                                <li><NavLink to="/info" style={{color:`${activeInfo}`,textDecoration:'none',fontWeight:600}}><FontAwesomeIcon icon={faBars} color={activeInfo}/><div style={{fontSize:14,marginLeft:-18}}>Gedung</div></NavLink></li>
                                <li><NavLink to="/" style={{color:`${activeHome}`,textDecoration:'none',fontWeight:600}}><FontAwesomeIcon icon={faCalendar} color={activeHome} disabled="true"/><div style={{fontSize:14,marginLeft:-12}}>Home</div></NavLink></li>
                                <li><NavLink to="/activity" style={{color:`${activeActivity}`,textDecoration:'none',fontWeight:600}}><FontAwesomeIcon icon={faScroll} color={activeActivity} /><div style={{fontSize:14,marginLeft:-18}}>Aktivitas</div></NavLink></li>
                                <li><NavLink to="/login" style={{color:'#B9BAC3',textDecoration:'none',fontWeight:600}}><FontAwesomeIcon icon={faSignOutAlt} color='#B9BAC3' onClick={()=>localStorage.removeItem('token')} /><div style={{fontSize:14,marginLeft:-16}}>Logout</div></NavLink></li>
                            </div>}
                    </ul>
                </div>
            </div>
         );
}
 
export default Sidebar;
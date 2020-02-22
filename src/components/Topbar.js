import React from 'react';
import {Link} from 'react-router-dom';
import './Topbar.scss';
import Logo from '../Logo-PR.png'

const Topbar = (props) => {
   
        return ( 
            <div className="my-topbar">
                {props.view==="admin"?<div></div>:
                <div>
                <div className="left-side">
                    <ul>
                        <li>{props.view==="admin"?<div></div>:<div><img src={Logo} style={{width:36}}></img></div>}</li>
                        <li><h4>{props.title}</h4></li>
                    </ul>
                </div>
                <div className="right-side">
                    <ul>
                        <li>
                        </li>
                        <li><Link to="/form" target="_blank" style={{ textDecoration: 'none' }}><div className="create-form">Create New</div></Link></li>
                    </ul>
                </div>
                </div>}
            </div>
         );
}
 
export default Topbar;
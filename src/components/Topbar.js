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
                        <li>{props.view==="admin"?<div></div>:<div><img src={Logo} style={{width:40}}></img></div>}</li>
                        <li><h5>{props.title}</h5></li>
                    </ul>
                </div>
                <div className="right-side">
                    <ul>
                        <li><div className="user-top" id="dropdownMenuLink">
                            a
                            </div></li>
                        <li><Link to="/form" target="_blank" style={{ textDecoration: 'none' }}><div className="create-form">Create New</div></Link></li>
                    </ul>
                </div>
                </div>}
            </div>
         );
}
 
export default Topbar;
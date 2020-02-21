import React from 'react';
import {Link} from 'react-router-dom';
import './Topbar.scss';

const Topbar = (props) => {
   
        return ( 
            <div className="my-topbar">
                <div className="left-side">
                    <ul>
                        <li>{props.view==="admin"?<div></div>:<div>Logo</div>}</li>
                        <li><h5>{props.title}</h5></li>
                    </ul>
                </div>
                <div className="right-side">
                    <ul>
                        <li>User</li>
                        <li><Link to="/form" target="_blank" style={{ textDecoration: 'none' }}><div className="create-form">Create New</div></Link></li>
                    </ul>
                </div>
            </div>
         );
}
 
export default Topbar;
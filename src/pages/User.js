import React from 'react';
import jwt from 'jsonwebtoken';

import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Body from '../components/Body';


const User = () => {
        
        return ( 
            <div>
                {localStorage.getItem('token')?
                <div>
            <Sidebar view="user" tab="home"/>
            <Body view="user"/>
            <Topbar view="user" title="Events"/>
            </div>
            :
            window.location.replace('/login')}
            </div>
         );
}
 
export default User;
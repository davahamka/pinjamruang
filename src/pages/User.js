import React from 'react';

import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Body from '../components/Body';
import Login from './Login';


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
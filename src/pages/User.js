import React from 'react';

import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Body from '../components/Body';


const User = () => {
        return ( 
            <div>
            <Sidebar view="user" tab="home"/>
            <Body view="user"/>
            <Topbar view="user" title="Events"/>
            </div>
         );
}
 
export default User;
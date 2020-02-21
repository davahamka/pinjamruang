import React from 'react';

import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Body from '../components/Body';

const Admin = () =>{
    return(
        <div>
        <Topbar view="admin" />
        
        <Body view="user"/>
            <Sidebar view="admin" text="Admin"/>
        </div>
    );
}

export default Admin;
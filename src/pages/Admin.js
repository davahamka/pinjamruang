import React from 'react';
import jwt from 'jsonwebtoken';

import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Body from '../components/Body';

const Admin = () =>{

    let token = localStorage.getItem('token')
    let decoded = jwt.decode(token);

    return(
        <div>
            {decoded.is_admin?
        <div>
        <Topbar view="admin" />
        <Body view="adminhome"/>
        <Sidebar view="admin" text="Admin"/>
        </div>
        :
        window.history.back()
        }
        </div>
    );
}

export default Admin;
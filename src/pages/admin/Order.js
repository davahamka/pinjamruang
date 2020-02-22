import React from 'react';

import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import Body from '../../components/Body';

const Order = () =>{
    return(
        <div>
        <Topbar view="admin" />
        <Body view="adminorder"/>
        <Sidebar view="admin" text="Admin"/>
        </div>
    );
}

export default Order;
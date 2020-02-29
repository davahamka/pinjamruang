import React from 'react';

import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import Body from '../../components/Body';

const Orderall =() =>{
    return(
        <div>
        <Topbar view="admin" />
        <Body view="adminorderall"/>
        <Sidebar view="admin" text="Admin"/>
        </div>
    )
}

export default Orderall;
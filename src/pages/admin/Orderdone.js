import React from 'react';

import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import Body from '../../components/Body';

const Orderdone =() =>{
    return(
        <div>
        <Topbar view="admin" />
        <Body view="adminorderdone"/>
        <Sidebar view="admin" text="Admin"/>
        </div>
    )
}

export default Orderdone;
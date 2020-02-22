import React from 'react';

import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import Body from '../../components/Body';

const GedungAdmin = () =>{
    return(
        <div>
            <Topbar view="admin" />
            <Body view="admingedung"/>
            <Sidebar view="admin" text="Admin"/>
        </div>
    )
}

export default GedungAdmin;
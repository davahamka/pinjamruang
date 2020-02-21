import React from 'react';

import Sidebar from '../../components/Sidebar';
import Body from '../../components/Body';
import Topbar from '../../components/Topbar';

const Activityall = () =>{
    return(
        <div>
            <div>
            <Sidebar view="user" tab="activity"/>
            <Body view="activityall"  />
            <Topbar view="activity" title="Activity"/>
        </div>
        </div>
    )
}

export default Activityall;
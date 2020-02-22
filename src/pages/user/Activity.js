import React from 'react';

import Sidebar from '../../components/Sidebar';
import Body from '../../components/Body';
import Topbar from '../../components/Topbar';

const Activity = () =>{
    return(
        <div>
            {localStorage.getItem('token')?
            <div>
            <Sidebar view="user" tab="activity" />
            <Body view="activity"  />
            <Topbar view="activity" title="Activity"/>
            </div>
            :
            window.location.replace('/login')
            }
        </div>
    );
}

export default Activity;
import React from 'react';

import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import Body from '../../components/Body';

const Info = () =>{
    return(
        <div>
            {localStorage.getItem('token')?
            <div>
            <Sidebar view="user" tab="information"/>
            <Body view="information"/>
            <Topbar view="user" title="Information"/>
            </div>
            :
            window.location.replace('/login')
            }
        </div>

    )
}

export default Info;
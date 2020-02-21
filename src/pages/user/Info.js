import React from 'react';

import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import Body from '../../components/Body';

const Info = () =>{
    return(
        <div>
            <Sidebar view="user" tab="information"/>
            <Body view="information"/>
            <Topbar view="user" title="Information"/>
        </div>

    )
}

export default Info;
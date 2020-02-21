import React from 'react';

import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import Body from '../../components/Body';

const Gedung = () =>{
    return(
        <div>
            <Sidebar view="user" tab="information"/>
            <Body view="gedung"/>
            <Topbar view="user" title="Information"/>
        </div>

    )
}

export default Gedung;
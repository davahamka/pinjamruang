import React from 'react';

import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import Body from '../../components/Body';

const Gedung = (props) =>{
    let data = props.location.state;
    return(
        <div>
            <Sidebar view="user" tab="information"/>
            <Body view="gedung" data={data}/>
            <Topbar view="user" title="Information"/>
        </div>

    )
}

export default Gedung;
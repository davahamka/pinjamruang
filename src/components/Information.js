import React from 'react';

import Boxgedung from './Boxgedung';


const Information = () =>{
    return(
        <div>
            <Boxgedung nama="A" status="Available"/>
            <Boxgedung nama="B" status="Available"/>
            <Boxgedung nama="C" status="Available"/>
            <Boxgedung nama="D" status="Available"/>
            <Boxgedung nama="E" status="Not Available"/>
            <Boxgedung nama="F" status="Available"/>
            
        </div>
    )
}

export default Information
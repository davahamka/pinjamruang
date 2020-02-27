import React, { useEffect,useState } from 'react';
import Axios from 'axios';

import Boxgedung from './Boxgedung';


const Information = (props) =>{
    let gedung = props.gedung
    return(
        <div>
            {gedung.map(x=>{
                return(
                <Boxgedung nama={x} status="Available" data={props.data}/>
                )
            })}
            
            
        </div>
    )
}

export default Information
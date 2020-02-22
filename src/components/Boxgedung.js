import React,{useState} from 'react';
import {Link} from 'react-router-dom'

import Gedung from './Gedung';


const Boxgedung = (props) =>{
    let[dataGedung,setDataGedung] = useState(props);
    return(
        <div>
            {props.status==="Available"?
            <div>
                <Link to={{pathname:'/info/gedung',state:{dataGedung}}} style={{textDecoration:'none',color:'black'}} >
             <div id={props.nama} className="box-gedung">
                <div>
                    <b>Gedung {props.nama}</b>
                </div>
                {props.status==="Available"?
                <div className="status-gedung status-hijau">
                    {props.status}
                </div>:
                <div className="status-gedung status-red">
                {props.status}
            </div>}
            </div>
            </Link>
            </div>
            :
            <div>
            <div id={props.nama} className="box-gedung" style={{cursor:'default',opacity:0.7,background:'#f1f1f1'}}>
                <div>
                    <b>Gedung {props.nama}</b>
                </div>
                {props.status==="Available"?
                <div className="status-gedung status-hijau">
                    {props.status}
                </div>:
                <div className="status-gedung status-red">
                {props.status}
            </div>}
            </div>
            </div>}
            
        </div>
    );
}

export default Boxgedung;
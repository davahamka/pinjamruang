import React,{useState} from 'react';
import {Link} from 'react-router-dom'


const Boxgedung = (props) =>{
    let[nama,setNama] = useState('');
    return(
        <div>
            <Link to={`/info/gedung?gedung=${props.nama}`}>
             <div id={props.nama} className="box-gedung">
                <div>
                    <b>Gedung {props.nama}</b>
                </div>
                <div className="status-gedung status-hijau">
                    Available
                </div>
            </div>
            </Link>
        </div>
    );
}

export default Boxgedung;
import React,{useState} from 'react';
import Boxgedung from './Boxgedung';


const Gedung = (props) =>{
    let url_string = window.location.href;
    let url = new URL(url_string);
    let gedung = url.searchParams.get("gedung");
    console.log(gedung);
    return(
        <div className="gedung">
            <div className="left-side" >
                <div>Gedung</div>
    <div className="title">{gedung}</div>
                <div className="kecil">6 AVAILABLE ROOM</div>
                <div className="lantai">
                    <li><b>LANTAI 1</b></li>
                    <li>LANTAI 2</li>
                </div>
            </div>
            <div className="right-side">
                <div className="gedung-card">
                    <div>
                        RUANG
                    </div>
                    <div className="ruang">
                        A1.1
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gedung;
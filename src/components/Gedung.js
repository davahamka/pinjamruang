import React from 'react';

const Gedung = (props) =>{
    // console.log(gedung);
    let dataGedung = props.data.dataGedung;
    console.log(dataGedung)
    return(
        <div className="gedung">
            <div className="left-side" >
                <div>Gedung</div>
    <div className="title">{dataGedung.nama}</div>
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
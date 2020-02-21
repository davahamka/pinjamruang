import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBuilding, faTrash, } from '@fortawesome/free-solid-svg-icons';

const Boxactivity = (props) =>{
    return(
        <div>
             <div className="box-activity">
                <div>
                    #{props.id}
                </div>
                <div className="judul">
                    <b>{props.judul}</b>
                </div>
                <div className="kelas">
                    {props.kelas}
                </div>
                <div className="info">
                    <FontAwesomeIcon icon={faClock} />       {props.tanggal}  |  {props.jam}<br />
                    <FontAwesomeIcon icon={faBuilding} /> {props.ruang}
                </div>
                <div className="status">
                    <div className="status-gedung status-grey">
                        {props.status}
                    </div>
                </div>
                {/* <div className="option">
                    <ul>
                        <li><FontAwesomeIcon icon={faTrash} /></li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
}

export default Boxactivity;
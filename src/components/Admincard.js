import React from 'react';
import {Link} from 'react-router-dom';

const Admincard = () =>{
    return(
        <div>
            <div className="admincard-title">
                DASHBOARD
            </div>
            <div className="activity-tab">
                <ul>
                    <Link to="/activity" style={{textDecoration:'none',color:'black'}}><li className="admincard-pil">Pinjam ruang hari ini</li></Link>
                    <Link to="/activity/all" style={{textDecoration:'none',color:'black'}}><li className="admincard-pil">Semua</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Admincard
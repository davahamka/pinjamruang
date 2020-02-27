import React from 'react';
import {Link} from 'react-router-dom';

const Adminordercard = () =>{
    return(
        <div>
            <div className="admincard-title">
                ORDER
            </div>
            <div className="activity-tab">
                <ul>
                    <Link to="/admin/order" style={{textDecoration:'none',color:'black'}}><li className="admincard-pil">Ruangan Tersedia</li></Link>
                    <Link to="/activity/all" style={{textDecoration:'none',color:'black'}}><li className="admincard-pil">Ruangan Dipakai</li></Link>
                    <Link to="/activity/all" style={{textDecoration:'none',color:'black'}}><li className="admincard-pil">Ruangan Nonaktif</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Adminordercard
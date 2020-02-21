import React from 'react';
import {Link} from 'react-router-dom';
const Activitytab = () =>{
    return(
        <div>
            <div className="activity-tab">
                <ul>
                    <Link to="/activity" style={{textDecoration:'none',color:'black'}}><li className="activity-pil">Sedang di proses</li></Link>
                    <Link to="/activity/all" style={{textDecoration:'none',color:'black'}}><li className="activity-pil">Semua</li></Link>
                </ul>
            </div>
        </div>
    );
}

export default Activitytab;
import React from 'react';
import Eventkanan from './Eventkanan';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll, faCalendar, faBars, } from '@fortawesome/free-solid-svg-icons';

const Eventcard = () =>{
    return(
    <div>
        <div className="event-card">
                            <div className="tanggalan">
                                <div className="tanggal-atas">20</div>
                                <div>Fri</div>
                            </div>
                            <div className="event-kanan">
                                <Eventkanan />
                                <Eventkanan />
                            </div>
                        </div>
                        
                        <br />
                        <hr />
    </div>
    )
}

export default Eventcard;
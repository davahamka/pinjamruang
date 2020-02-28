import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faBuilding } from '@fortawesome/free-solid-svg-icons';


const Eventkanan = (props) =>{
    return(
        <div>
                                <div>
                                    <div className="judul">
                                        {props.judul}
                                    </div>
                                    <div className="jamtanggal">
                                        <div>
                                            <FontAwesomeIcon icon={faCalendarCheck} style={{width:12,marginRight:'8px',marginTop:'8px'}}/>07.00-07.50
                                        </div>
                                        <div style={{marginLeft:20}}>
                                        <FontAwesomeIcon icon={faBuilding} style={{width:12,marginRight:'8px',marginTop:'8px'}}/>F2.1
                                        </div>
                                    </div>
                                </div>
                                <br />
        </div>
    )
}

export default Eventkanan;
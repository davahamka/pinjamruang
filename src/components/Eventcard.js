import React from 'react';
import Eventkanan from './Eventkanan';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll, faCalendar, faBars, } from '@fortawesome/free-solid-svg-icons';

const Eventcard = () =>{
    return(
    <div>
        <div className="eventt">
        <div className="event-card">
                            <div className="tanggalan">
                                <div className="tanggal-atas">20</div>
                                <div>Fri</div>
                            </div>
                            <div className="event-kanan">
                                <Eventkanan judul="FILKOM Bersih"/>
                                <Eventkanan judul="Pemilihan Mawapres"/>
                            </div>

                        </div>
                        
                        <br />
                        <hr />
                        <div className="event-card">
                            <div className="tanggalan">
                                <div className="tanggal-atas">24</div>
                                <div>Fri</div>
                            </div>
                            <div className="event-kanan">
                                <Eventkanan judul="Diklat BCC"/>
                                <Eventkanan judul="HOLOGY 5.0"/>
                            </div>
                        
                        </div>
                        <br />
                        <hr />
                        <div className="event-card">
                            <div className="tanggalan">
                                <div className="tanggal-atas">24</div>
                                <div>Fri</div>
                            </div>
                            <div className="event-kanan">
                                <Eventkanan judul="Diklat BCC"/>
                                <Eventkanan judul="HOLOGY 5.0"/>
                            </div>
                        
                        </div>
                        <br />
                        <hr />
                        </div>
    </div>
    )
}

export default Eventcard;
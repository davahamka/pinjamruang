import React from 'react';

import "../../components/Form.scss";
import FormBanner from '../../form-banner.JPG';
import Dateinline from '../../components/Dateinline';

import Helmet from 'react-helmet';

const Formulir = () =>{
    return(
        <div>
        <Helmet bodyAttributes={{style: 'background-color : #F7F6F9'}}/>
            <div className="form-container">
                <div className="form-banner">
                    <img src={FormBanner} style={{width:'84vw',height:'40vh',borderRadius:'10px'}}></img>
                </div>
                <div>
                    Stepper
                </div>
                <div className="form-a">
                    <form>
                        
                    Jenis
                        <div className="form-check">
                            <br/>
                            <input type="radio" className="form-check-input" id="Kelas" name="jenis" value="Kelas"></input>
                            <label class="form-check-label" for="Kelas">Kelas</label>
                            <input type="radio" className="form-check-input" id="Nonkelas" name="jenis" value="Non-kelas"></input>
                            <label class="form-check-label" for="Nonkelas">Non-kelas</label>
                        </div>
                        <div className="form-t">
                            <div>
                                <label>Nama</label>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="nama" value="Dava" disabled></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>NIM</label>
                                <div>
                                    <input type="text" className="form-control" placeholder="nama" value="195150200111032" disabled></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Judul kegiatan</label>
                                <div>
                                    <input type="text" className="form-control" placeholder="Nama Kegiatan"></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Organisasi</label>
                                <select class="form-control">
                                    <option>Small select</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Tanggal dan Jam</label>
                                <Dateinline />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formulir;
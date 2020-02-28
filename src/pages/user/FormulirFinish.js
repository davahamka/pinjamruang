import React,{useState,useEffect} from 'react';
import jwt from 'jsonwebtoken';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import "../../components/Form.scss";
import FormBanner from '../../form-banner.JPG';


import Helmet from 'react-helmet';


const FormulirFinish = () =>{

    let [nama,setNama] = useState('')

    let token = localStorage.getItem('token')
    let decoded = jwt.decode(token);
    let user_id = decoded._id;

    

    return(
        <div>
            {localStorage.getItem('token')?
            <div>
                <Helmet bodyAttributes={{style: 'background-color : #F7F6F9'}}/>
            <div className="form-container">
                <div className="form-banner">
                    <img src={FormBanner} style={{borderRadius:'10px',width:1080,height:240,objectFit:'cover'}}></img>
                </div>
                <div className="form-a">
                    <div className="formfinish-tulisan">
                        <div className="judul">Terima kasih, {user_id}</div>
                    
                    <div className="text">
                    Pesanan  anda sedang kami proses,
                    Silahkan cek <Link to="/activity">tab activity</Link> anda untuk
                    melihat status pesanan anda.
                    </div>
                    </div>
                </div>
            </div>
            
            </div>
            :window.location.replace('/login')
            }
        
        </div>
    )
}

export default FormulirFinish;
import React,{useState} from 'react';

import Button from '../components/Button';
import logo from '../Logo-PR.png';
import '../components/Login.scss';
import axios from 'axios';
import Swal from 'sweetalert2';
import Helmet from 'react-helmet';
import jwt from 'jsonwebtoken';

const Login = () => {
    const[nim,setNIM] = useState('');
    const[password,setPassword] = useState('');

    const submitLogin = async (e) =>{
        e.preventDefault()  
        try{
            let hasil = await axios.post('http://api-peminjaman.herokuapp.com/user/login', { nim, password });
            localStorage.setItem('token',hasil.data.token);
            var decoded = jwt.decode(hasil.data.token);
            let isAdmin = decoded.is_admin;
            if(isAdmin){
                window.location.replace('/admin');
            }else{
                window.location.replace('/');
            }
        }    
        catch(err){
            switch(err.response.status){
                case 401:
                    Swal.fire('Username/Password salah','','error');
                    break;
                    default:console.log("Berhasil");
            }
        }
       
    }
        return ( 
            <div>
                {localStorage.getItem('token')?window.history.back()
                :
                <div>
                    <Helmet
                style={[{
                    "cssText": `
                        body {
                            overflow: hidden;
                        }
                        input[type=number]::-webkit-inner-spin-button, 
                        input[type=number]::-webkit-outer-spin-button { 
                            -webkit-appearance: none; 
                            margin: 0; 
                        }
                    `
                }]}
            />
                <div className="login-left">
                    <div className="login-container">
                        <img src={logo} style={{width:60}}/>
                        <div className="login-form">
                            <div className="form-title">
                                <h1>Login</h1>
                                <p>Selamat datang di aplikasi peminjaman ruang.</p>
                            </div>
                            <div className="form-box">
                                <form>
                                    <label>NIM</label>
                                    <div>
                                        <input type="number" className="my-input" placeholder='Isi NIM' style={{marginBottom:30}} required onChange={data=>setNIM(data.target.value)}></input>
                                    </div>
                                    <label>Password</label>
                                    <div>
                                        <input type="password" className="my-input" placeholder='Isi Password' style={{marginBottom:20}} onChange={data=>setPassword(data.target.value)}></input>
                                    </div>
                                    <div style={{marginTop:20}}>
                                        <Button text="Login" type="submit" diTekan={(e)=>submitLogin(e)}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="center-view" style={{marginTop:20}}>
                                Copyright © RoadtoBCC. All Rights Reserved.
                            </div>
                    </div>
                </div>
                <div className="login-right">
                </div>
                </div>
                }
                
            </div>
         );
}
 
export default Login;
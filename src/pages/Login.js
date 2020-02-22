import React,{useState} from 'react';

import Button from '../components/Button';
import InputComp from '../components/InputComp';
import '../components/Login.scss';
import axios from 'axios';
import Swal from 'sweetalert2';

const Login = () => {
    const[nim,setNIM] = useState('');
    const[password,setPassword] = useState('');

    const submitLogin = (e) =>{
        console.log('d')
        e.preventDefault()      
        axios.post('http://peminjaman.herokuapp.com/user/login', { nim, password })
        .then(res => {
                console.log('log')
                localStorage.setItem('token', res.data.token);
                console.log(res)
                window.location.replace('/')
            })
            .catch(err => {
                // console.log(err.response.status);
                switch(err.response.status){
                    case 401:
                        Swal.fire('Username/Password salah','','error');
                        break;
                        default:console.log("Berhasil");
                }
                
                
            }) 
    }
        return ( 
            <div>
                <div className="login-left">
                    <div className="login-container">
                        logo
                        <div className="login-form">
                            <div className="form-title">
                                <h1>Login</h1>
                                <p>Selamat datang di aplikasi peminjaman ruang.</p>
                            </div>
                            <div className="form-box">
                                <form>
                                    <label>NIM</label>
                                    <div>
                                        <input type="text" className="my-input" placeholder='Isi NIM' onChange={data=>setNIM(data.target.value)}></input>
                                    </div>
                                    <label>Password</label>
                                    <div>
                                        <input type="password" className="my-input" placeholder='Isi Password' onChange={data=>setPassword(data.target.value)}></input>
                                    </div>
                                    <div style={{marginTop:20}}>
                                        <Button text="Login" type="submit" diTekan={(e)=>submitLogin(e)}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="center-view">
                                Copyright © RoadtoBCC. All Rights Reserved.
                            </div>
                    </div>
                </div>
                <div className="login-right">
                </div>
            </div>
         );
}
 
export default Login;
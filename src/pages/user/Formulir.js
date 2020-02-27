import React,{useState,useEffect,useCallback} from 'react';
import jwt from 'jsonwebtoken';
import Axios from 'axios';
import moment from 'moment';
import {useDropzone} from 'react-dropzone'

import 'date-fns';
import Datepicker,{registerLocale, setDefaultLocale} from 'react-datepicker';
import id from 'date-fns/locale/id';
import "react-datepicker/dist/react-datepicker.css";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import DateFnsUtils from '@date-io/date-fns';

import "../../components/Form.scss";
import FormBanner from '../../form-banner.JPG';
import Dateinline from '../../components/Dateinline';
import { makeStyles } from '@material-ui/core/styles';


import Helmet from 'react-helmet';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));

  

  
  
  function getSteps() {
    return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad'];
  }

  function isiData(){

  }

const Formulir = () =>{

    let [nama,setNama] = useState('');
    let [gedung,setGedung] = useState([]);
    let[document,setDocument] = useState('');
    let [kegiatan,setKegiatan] = useState('')
    let [organisasi,setOrganisasi] = useState('')
    let [keterangan,setKeterangan] = useState('')

    

    let[ambilJam,setAmbilJam] = useState('');
    let[data,setData] = useState({});
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const[dateAwal,setDateAwal] = useState(new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()));

    let jawal = ambilJam.substr(0,5);
    let jakhir = ambilJam.substr(6)
    let tanggal = dateAwal.getFullYear()+"-"+(dateAwal.getMonth()+1)+"-"+dateAwal.getDate()
    let jamawal = moment(tanggal+" "+jawal).toDate()
    let start_time = jamawal.toString();
    let jamakhir = moment(tanggal+" "+jakhir).toDate()
    let end_time = jamakhir.toString();
    function getDate(ambilDate){
        setDateAwal(new Date(ambilDate.getFullYear(),ambilDate.getMonth(),ambilDate.getDate()))
    }

    let token = localStorage.getItem('token')
    let decoded = jwt.decode(token);
    let user_id = decoded._id;
    let nim = decoded.nim;


    useEffect(async() => {
        try{
            let dataku = await Axios.get(`http://api-peminjaman.herokuapp.com/user/${user_id}`)
            setNama(dataku.data.data.name)
            let dataku2 = await Axios.get(`https://api-peminjaman.herokuapp.com/room`)
            dataku2 = dataku2.data.data;
            let gedungSorted =[];
            for(let i=0;i<dataku2.length;i++){
                gedungSorted.push(dataku2[i].gedung);
            }
            let gedungSortedFix = [...new Set(gedungSorted)];
            gedungSortedFix.sort();
            setGedung(gedungSortedFix);
        }catch(e){

        }
    }, [])
    
    console.log(gedung)

    let dataKu = {
        'organisasi' : ['BEM','DPM','RAION','BCC','Eksternal'],
        'jam' : ['07:00-07:50','07:50-08:40','08:40-09:30', '09:30-10:20', '10:20-11:10', '11:10-12:00', '12:00-12:50', '12:50-13:40', '13:40-14:30', 
                '14:30-15:20','15:20-16:10','16:10-17:00']
    }
    let rooms_id = '5e55697267b2cb3a9c2455a2';

    let config = {
        headers : { Authorization: `Bearer ${localStorage.getItem('token')}`}
    }

    let HandleSelectFile = (e) => {
            setDocument(e.target.files[0]);
        }
    
    

    async function handleSubmit(){
        try{
            const data = new FormData();
            data.append('file', document);
            console.log(data)
            let hasil = await Axios.post('https://api-peminjaman.herokuapp.com/loan', {user_id,rooms_id, start_time, end_time, data},config)
            console.log(hasil)
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div>
            {localStorage.getItem('token')?
            <div>
                <Helmet bodyAttributes={{style: 'background-color : #F7F6F9'}}/>
            <div className="form-container">
                <div className="form-banner">
                    <img src={FormBanner} style={{borderRadius:'10px',width:1080,height:240,objectFit:'cover'}}></img>
                </div>
                {/* <div>
                    Stepper
                </div> */}
                <div className="form-a">
                    <div className="form-b">Jenis</div>
                        <div className="pil-jenis">
                            <input type="radio" className="form-check-input-jenis" id="Kelas" name="jenis" value="Kelas"></input>
                            <label class="form-check-label" for="Kelas">Kelas<div>Peminjaman untuk kegiatan akademik</div></label>
                            <input type="radio" className="form-check-input-jenis" id="Nonkelas" name="jenis" value="Non-kelas"></input>
                            <label class="form-check-label" for="Nonkelas">Non-kelas<div>Peminjaman untuk kegiatan non akademik</div></label>
                        </div>
                        <div className="form-t">
                            <div>
                                <label>Nama</label>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="nama" value={nama} disabled></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>NIM</label>
                                <div>
                                    <input type="text" className="form-control" placeholder="nama" value={nim} disabled></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Judul kegiatan</label>
                                <div>
                                    <input type="text" className="form-control" placeholder="Nama Kegiatan" onChange={data=>setKegiatan(data.target.value)}></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Organisasi</label>
                                <select class="form-control" onChange={(e)=>setOrganisasi(e.target.value)}>
                                <option value=" "></option>
                                    {dataKu.organisasi.map(x=><option value={x}>{x}</option>)}
                                </select>
                            </div>
                            <label>Tanggal dan Jam</label>    
                            <div className="form-group form-date">
                            <div style={{borderRadius:50}}>
                
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              format="MM/dd/yyyy"
              value={dateAwal}
              onChange={getDate}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
                </MuiPickersUtilsProvider>
                
            {console.log(dateAwal)}
            
            </div>
                                    <div style={{width:160,marginTop:10}}>
                                        <select class="form-control" onChange={(e)=>setAmbilJam(e.target.value)}>
                                        <option value=" "></option>
                                        {dataKu.jam.map(x=><option value={x}>{x}</option>)}
                                        </select>
                                    </div>
                                {console.log(ambilJam)}
                                {console.log(tanggal)}
                                {console.log(jamawal)}
                                {console.log(jamakhir)}
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Keterangan</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>setKeterangan(e.target.value)}></textarea>
                            </div>
                            <div className="form-group">
                                <label>Gedung</label>
                                <select class="form-control">
                                    {gedung.map(x=><option>{x}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Lantai</label>
                                <select class="form-control">
                                    {dataKu.organisasi.map(x=><option>{x}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Ruang</label>
                                <select class="form-control">
                                    {dataKu.organisasi.map(x=><option>{x}</option>)}
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Upload berkas PDF</label>
                                <input type="file" class="form-control-file" name="" id="exampleFormControlFile1" accept=".pdf" onChange={e=>HandleSelectFile(e)}/>
                            </div>
                            {console.log(document)}
                            <button className='btn btn-primary' style={{marginTop:24}} onClick={()=>handleSubmit()}>Submit</button>
                        </div>
                </div>
            </div>
            </div>
            :window.location.replace('/login')
            }
        
        </div>
    )
}

export default Formulir;
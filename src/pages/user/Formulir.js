import React,{useState} from 'react';

import "../../components/Form.scss";
import FormBanner from '../../form-banner.JPG';
import Dateinline from '../../components/Dateinline';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
    let dataKu = {
        'organisasi' : ['BEM','DPM','RAION','BCC','Eksternal'],
        'jam' : ['07.00 - 07.50','07.50 - 08.40','08.40 - 09.30', '09.30 - 10.20', '10.20 - 11.10', '11.10 - 12.00', '12.00 - 12.50', '12.50-13.40', '13.40 - 14.30', 
                '14.30 - 15.20','15.20 - 16.10','16.10 - 17.00','']
    }
    let [nama,setNama] = useState('Dava')
    let [nim,setNIM] = useState('195150200111032')
    let [kegiatan,setKegiatan] = useState('')
    let[data,setData] = useState({});
    const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
    return(
        <div>
            {console.log(kegiatan)}
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
                                <select class="form-control">
                                    {dataKu.organisasi.map(x=><option>{x}</option>)}
                                </select>
                            </div>
                            <label>Tanggal dan Jam</label>    
                            <div className="form-group form-date">
                                <Dateinline />
                                    <div style={{width:160,marginTop:10}}>
                                        <select class="form-control">
                                            {dataKu.jam.map(x=><option>{x}</option>)}
                                        </select>
                                    </div>
                            </div>
                            <div class="form-group">
    <label for="exampleFormControlTextarea1">Keterangan</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formulir;
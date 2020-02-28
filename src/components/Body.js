import React,{useState, useEffect} from 'react';
import Axios from 'axios';

import './Body.scss';
import Eventcard from './Eventcard';
import Dateuser from './Dateuser';
import Information from './Information';
import Activity from './Activity'; 
import Activitytab from './Activitytab';
import Gedung from './Gedung';
import Admin from './Admin';
import Admincard from './Admincard';
import Adminordercard from './Adminordercard';
import Orderan from './Orderan';

const Body = (props) => {

    let[gedung,setGedung] = useState([]);
    let[data,setData] = useState([]);
    let[dataOrderan,setDataOrderan] = useState({})

    useEffect( ()=>{
        try{
            async function fetchApi(){
            let hasil = await Axios.get(`https://api-peminjaman.herokuapp.com/room`);
            let hasil2 = await Axios.get(`https://api-peminjaman.herokuapp.com/loan`);
            let dataku = hasil.data.data;
            let dataku2 = hasil2.data;
            setData(dataku)
            setDataOrderan(dataku2)
            let gedungSorted =[];
            let da =[];
            for(let i=0;i<dataku.length;i++){
                gedungSorted.push(dataku[i].gedung);
            }
            let gedungSortedFix = [...new Set(gedungSorted)];
            gedungSortedFix.sort();
            setGedung(gedungSortedFix);}
            fetchApi()

        }catch(e){
            console.log(e);
        }
    },[10])





    // let data = {
    //     'gedung' : ['A','B','C','D','E','F'],
    //     'lantai' : ['1','2'],
    //     'ruang' : ['A1.1']
    // }

    const bodyView = props.view;
    function showMiniNav(){
        switch(bodyView){
            case "user":
                return(
                    <Dateuser />
                )
            case "information":
                return(
                    <Dateuser />
                )
            case "gedung":
                return(
                    <Dateuser />
                )
                break;
            case "activity":
                return(
                    <Activitytab />
                )
                break;
            case "activityall":
                return(
                    <Activitytab />
                )
                break;
            case "adminhome":
                return(
                    <Admincard />
                )
            case "adminorder":
                return(
                    <Adminordercard />
                )
            default:
                return(
                    <div>

                    </div>
                )
        }
    }
    function showBody(){
        switch(bodyView){
            case "user":
                return(
                    <div>
                        <div className="event-title">
                            <div className="text-atas">2020</div>
                            <div className="text-bawah">Februari</div>
                        </div>
                        <Eventcard />
                    </div>
                );
                break;
            case "information":
                return(
                    <div>
                        <Information gedung={gedung} data={data}/>    
                    </div>
                );
                break;
            case "activity":
                return(
                    <div>
                        <Activity view="proses" dataOrder={dataOrderan}/>
                    </div>
                );
                break;
            case "activityall":
                return(
                    <div>
                        <Activity view="semua"/>
                    </div>
                );
                break;
            case "gedung":
                return(
                    <div>
                       <Gedung data={props.data}/>
                    </div>
                );
                break;
            case "adminhome":
                return(
                    <div>
                        <Admin view="home" gedung={gedung} data={data} dataOrderan={dataOrderan} />
                    </div>
                );
            case "adminorder":
                return(
                    <div>
                        <Orderan data={data} orderan={dataOrderan} />
                    </div>
                );

        }
    }
        
        return ( 
            <div>
                
                <div className={`${bodyView}-body`}>
                {showMiniNav()}
                <div className="inside">     
                <div className="event-container">
                {showBody()}
                </div>
            
                 </div>
            </div>
                
            </div>
         );
}
 
export default Body;
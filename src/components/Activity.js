import React,{useState,useEffect} from 'react';
import jwt from 'jsonwebtoken';
import Boxactivity from './Boxactivity';
import Axios from 'axios';


const Activity = (props) =>{
    let view = props.view;
    let [length,setLength] = useState(0);
    let [dataOrderan,setDataOrderan] = useState([]);
    let [dataOrderanID,setDataOrderanID] = useState([]);
    let myToken = localStorage.getItem('token');
    var decoded = jwt.decode(myToken);
    let myId = decoded._id
    
    let arrayku = [];
    useEffect(() => {
        async function getDa(){
            let hasil2 = await Axios.get(`https://api-peminjaman.herokuapp.com/loan`);
            let dataku2 = hasil2.data;
            for(let i=0;i<dataku2.data.length;i++){
                if(dataku2.data[i].user_id._id===myId){
                    setDataOrderanID(prevArray => [...prevArray, dataku2.data[i]])
                }
                }
                dataOrderanID.reverse()
            }
            
        getDa()
    }, [])
    
    
    
    // for(let i=0;i<length;i++){
    //     if(dataOrderan[i].user_id._id===myId){
    //         arrayku.push(dataOrderan[i]);
    //     }
    // }
    let yoo = dataOrderanID.map((x)=>{
        let p = x.start_time.substr(0,10);
        let q = x.is_academic?"Kelas":"Non-Kelas"
        let l = x.start_time.substr(11,5)+"-"+x.end_time.substr(11,5);
        if(view==="proses"&&!x.is_accepted){
            return(
                <div>
                    <Boxactivity id={x._id} judul="Diklat BCC" kelas={q} tanggal={p} jam={l} ruang={x.rooms_id[0].room_name} status="Pending"/>
                </div>
            )
        }else if(view==="semua"){
            return(
                <div>
                    <Boxactivity id={x._id} judul="Diklat BCC" kelas={q} tanggal={p} jam={l} ruang={x.rooms_id[0].room_name} status={x.is_accepted?"Accepted":"Pending"}/>
                </div>
            )
        }
    })
    return(
        <div>
            
        
            {yoo}
            
            
        </div>
    )
}

export default Activity;
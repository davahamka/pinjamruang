import React,{useState} from 'react';
import Gedungkanancard from './Gedungkanancard';

const Gedung = (props) =>{

    let lantai = [];
    let ruang = [];
    let namaGedung = props.data.dataGedung.nama
    let dataGedung = props.data.dataGedung.data;
    function getLantai(){
        let lan=[];
        let ru=[];
        let lantaiSortedFixed=[];
        let ruangSortedFixed=[];
        for(let i=0;i<dataGedung.length;i++){
            if(dataGedung[i].gedung===namaGedung){
                lan.push(dataGedung[i].lantai)
                ru.push(dataGedung[i].room_name)
            }
            lantaiSortedFixed = [...new Set(lan)];
            lantaiSortedFixed.sort();
            ruangSortedFixed = [...new Set(ru)];
            ruangSortedFixed.sort();
            
        }
        lantai = lantaiSortedFixed
        ruang = ruangSortedFixed
    }
    getLantai();
    return(
        <div className="gedung">
            <div className="left-side" >
                <div>Gedung</div>
    <div className="title">{namaGedung}</div>
                <div className="kecil">6 AVAILABLE ROOM</div>
                <div className="lantai">
                    {lantai.map(x=><li>LANTAI {x}</li>)}
                </div>
            </div>
           <Gedungkanancard data={ruang} selected={false}/>
        </div>
    )
}

export default Gedung;
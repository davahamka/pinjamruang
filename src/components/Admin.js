import React,{useState,useEffect} from 'react';
import Axios from 'axios';

const Admin = (props)=>{
    let data = props;
    let dataku = props.dataOrderan.data;
    // dataku = dataku.reverse()
    let[gedung,setGedung] = useState(data.gedung[0]);
    let[lantai,setLantai] = useState();
    let[uwu,setUwu] = useState([])
    useEffect(() => {
      try{
        async function getDa(){
          let hasil2 = await Axios.get(`https://api-peminjaman.herokuapp.com/loan`);
          let dataku2 = hasil2.data;
          dataku2.data.reverse()
          for(let i=0;i<5;i++){
            if(!dataku2.data[i].is_accepted){
                  setUwu(prevArray => [...prevArray, dataku2.data[i]])
                }
              }
          }
          
      getDa()
      }catch(e){

      }
    }, [])
    let orderanview = uwu.map(x=>{
      let p = x.start_time.substr(0,10);
      let l = x.start_time.substr(11,5)+"-"+x.end_time.substr(11,5);
      return(
            <tr>
              <td>{x._id.substr(9)}</td>
              <td>{x.user_id.name}</td>
              <td>{x.rooms_id[0].room_name}</td>
              <td>{p}</td>
              <td>{l}</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
      )
    }
        )  
    
      function pilihGedung(){
        return(
        data.gedung.map(x => <option value={x}>{x}</option>)
        )
      }
      function handleGedung(e){
        console.log(e)
      }
      function handleSubmit(e){
        console.log(e)
      }
    return(
        <div>
            <div className="tab-ruang">
                Informasi Ruang
                <div>
                    <form>
                        <div className="left-side">
                            <div>
                                <label>Gedung</label>
                                    <div className="form-group">
                                        <select class="form-control form-control-sm"onChange={(e)=>setGedung(e.target.value)} value={null}>
                                            <option value="N/A"></option>
                                            {pilihGedung()}
                                        </select>
                                    </div>
                            </div>
                            <div>
                                <label>Lantai</label>
                                    <div className="form-group">
                                        <select class="form-control form-control-sm">
                                        </select>
                                    </div>
                            </div>
                            <div>
                                <label>Ruang</label>
                                    <div className="form-group">
                                        <select class="form-control form-control-sm">
                                        </select>
                                    </div>
                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={handleSubmit()}>Submit</button>
                    </form>
                </div>
            </div>
            <div className="tab-orderan">
                <div>
                </div>
                <div>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Ruang</th>
      <th scope="col">Tanggal</th>
      <th scope="col">Jam</th>
      <th scope="col">Kegiatan</th>
      <th scope="col">Option</th>
    </tr>
  </thead>
  <tbody>
    {orderanview}
  </tbody>
</table>
                </div>
            </div>
        </div>
    )
}

export default Admin;
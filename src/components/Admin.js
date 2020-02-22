import React,{useState} from 'react';

const Admin = (props)=>{
    let data = props.data;
    console.log(data.gedung)
    let[gedung,setGedung] = useState();
    let[lantai,setLantai] = useState();
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
                                        <select class="form-control form-control-sm">
                                            {data.gedung.map(x => <option>{x}</option>)}
                                        </select>
                                    </div>
                            </div>
                            <div>
                                <label>Lantai</label>
                                    <div className="form-group">
                                        <select class="form-control form-control-sm">
                                        {data.lantai.map(x => <option>{x}</option>)}
                                        </select>
                                    </div>
                            </div>
                            <div>
                                <label>Ruang</label>
                                    <div className="form-group">
                                        <select class="form-control form-control-sm">
                                            {data.ruang.map(x => <option>{x}</option>)}
                                        </select>
                                    </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Admin;
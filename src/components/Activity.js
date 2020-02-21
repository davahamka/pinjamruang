import React from 'react';

import Boxactivity from './Boxactivity';


const Activity = (props) =>{
    let view = props.view;
    return(
        <div>
            {view==="semua"?
            <div>
        <Boxactivity id="100220001" judul="Diklat BCC" kelas="Non-Kelas" tanggal="Kamis, 12 Februari 2020" jam="08.00-12.00" ruang="A1.2" status="Pending"/>
        <Boxactivity id="100220001" judul="Diklat BCC" kelas="Non-Kelas" tanggal="Kamis, 12 Februari 2020" jam="08.00-12.00" ruang="A1.2" status="Denied"/>
        <Boxactivity id="100220001" judul="Diklat BCC" kelas="Non-Kelas" tanggal="Kamis, 12 Februari 2020" jam="08.00-12.00" ruang="A1.2" status="Diterima"/>
        </div>
        :
        <Boxactivity id="100220001" judul="Diklat BCC" kelas="Non-Kelas" tanggal="Kamis, 12 Februari 2020" jam="08.00-12.00" ruang="A1.2" status="Pending"/>
        }
            
            
        </div>
    )
}

export default Activity;
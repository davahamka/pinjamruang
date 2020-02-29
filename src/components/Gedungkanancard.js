import React from 'react';

const Gedungkanancard = (props) =>{
    let ruang = props.data;
    return(
        <div>
             <div className="right-side">
                {ruang.map(x=>{
                    return(
                        <div>
                    <div className="flexx">
                    <div className="gedung-card">
                    <div>
                        RUANG
                    </div>
                    <div className="ruang">
                        {x}
                    </div>
                </div>
                <div className="container" style={{marginLeft:-320,marginTop:-30,marginBottom:-70}}>
                <div className="flexu" style={{marginLeft:-100}}>
                    <div className="jamjaman">
                        <div className="jamku">07.00 - 07.50</div>
                        <div className="jamku">07.50 - 08.40</div>
                        <div className="jamku">08.40 - 09.30</div>
                        <div className="jamku">09.30 - 10.20</div>
                        <div className="jamku">10.20 - 11.10</div>
                        <div className="jamku">11.10 - 12.00</div>
                    </div>  
                    <div className="" style={{marginLeft:10}}>
                        <div className="jamku">Tersedia</div>
                        <div className="jamku">Tersedia</div> 
                        <div className="jamku">Tersedia</div> 
                        <div className="jamku">Tersedia</div> 
                        <div className="jamku">Tersedia</div>
                        <div className="jamku">Tersedia</div>  
                    </div>  
                    <div className="jamjaman">
                        <div className="jamku">12.00 - 12.50</div>
                        <div className="jamku">12.50 - 13.40</div>
                        <div className="jamku">13.40 - 14.30</div>
                        <div className="jamku">14.30 - 15.20</div>
                        <div className="jamku">15.20 - 16.10</div>
                        <div className="jamku">16.10 - 17.00</div>
                    </div>   
                    <div className="" style={{marginLeft:10}}>
                        <div className="jamku">Tersedia</div>
                        <div className="jamku">Tersedia</div> 
                        <div className="jamku">Tersedia</div> 
                        <div className="jamku">Tersedia</div> 
                        <div className="jamku">Tersedia</div>
                        <div className="jamku">Tersedia</div>  
                    </div>  
                    <div className="jamjaman">
                        <div className="jamku">17.00 - 17.50</div>
                        <div className="jamku">17.50 - 18.40</div>
                        <div className="jamku">18.40 - 19.30</div>
                        <div className="jamku">19.30 - 20.20</div>
                        <div className="jamku">20.20 - 21.10</div>
                        <div className="jamku">21.10 - 22.00</div>
                    </div>  
                    <div className="" style={{marginLeft:10}}>
                        <div className="jamku">Tersedia</div>
                        <div className="jamku">Tersedia</div> 
                        <div className="jamku">Tersedia</div> 
                        <div className="jamku">Tersedia</div> 
                        <div className="jamku">Tersedia</div>
                        <div className="jamku">Tersedia</div>  
                    </div>     
                </div>
                </div>
                </div>
                
                
            </div>
                )
                    })}
                
            </div>
        </div>
    )
}

export default Gedungkanancard
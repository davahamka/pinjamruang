import React from 'react';

const Notfound = (props) => {
        return ( 
            <div className="App">
                <h1>Page {props.location.pathname} not found </h1>
            </div>
         );
}
 
export default Notfound;
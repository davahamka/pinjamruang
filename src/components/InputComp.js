import React from 'react';
import './Login.scss';

const InputComp = (props) => {
        return ( 
            <div>
                <input placeholder={props.placeholder} type={props.type} className="my-input" id={props.id}></input>
            </div>
         );
}
 
export default InputComp;
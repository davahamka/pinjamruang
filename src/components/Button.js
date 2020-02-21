import React from 'react';
import './Button.scss';

const Button = (props) => {
        const buttonType = props.type
        return ( 
            <div>
                <button className={`btnku ${buttonType} btn-login`} onClick={props.diTekan}><b>{props.text}</b></button>
            </div>
         );
}
 
export default Button;
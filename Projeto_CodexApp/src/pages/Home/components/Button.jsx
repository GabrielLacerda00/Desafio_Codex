import React from 'react';
import "../components/Button.css";

const Button = ({children,onClick}) => {
    return ( 
        <button onCLick={onClick} className='button'>
            {children}
        </button>
     );
}

export default Button;
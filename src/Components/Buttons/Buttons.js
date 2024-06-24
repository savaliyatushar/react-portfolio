import React from 'react';
import "./Button.css"
import { Button } from 'react-bootstrap';

const Buttons = ({ btnName, onclick, className }) => {
    return (
        <div>
            <Button className={`custom-button ${className}`} onClick={onclick}>
                {btnName}
            </Button>
        </div>
    );
}

export default Buttons;

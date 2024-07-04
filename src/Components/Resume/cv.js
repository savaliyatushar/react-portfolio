import React from 'react';
import Buttons from '../Buttons/Buttons';
import { Link } from 'react-router-dom';

const Cv = ({ mailto, label}) => {
    const downloadresume = () => {
        const url = '/cv-tushar savaliya (1).pdf';
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.setAttribute('download', 'Tushar_Savaliya_Resume.pdf');
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        alert('Thank you for downloading!');
    };
    return (
        <div>
            <Buttons 
            btnName={"Download"}
                onclick={downloadresume}
            />
            <Link
                to='#'
                onClick={(e) => {
                    window.location.href = mailto;
                    e.preventDefault();
                }}
            >
                {label}
            </Link>
        </div>
    );
}

export default Cv;

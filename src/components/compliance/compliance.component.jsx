import React from 'react';
import Frame from '../../assets/Frame.svg';
import './compliance.component.css';

const Compliance = () => {
    return(
        <div className='compliance'>
            <h2>Compliance Certifications/<br />Standards We Specialize In</h2>
            <p>Elevate Your Organization's Security Posture with Our <br /> 
               Compliance/Standards Consulting Services
            </p>
            <div className="button">
                <button className='contact-us'>Contact us</button>
            </div>
            <img src={Frame} alt='a graphic containing all the client companies' className='frame' />
        </div>
    )
}

export default Compliance;
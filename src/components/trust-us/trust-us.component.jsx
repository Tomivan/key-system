import React from 'react';
import Frame from '../../assets/Frame-2.svg';
import './trust-us.component.css';

const TrustUs = () => {
    return (
        <div className="trust-us">
            <h2>They Trust Us</h2>
            <p>And so can you</p>
            <img src={Frame} alt='a graphic containing client companies' className='frame-2' />
        </div>
    )
}

export default TrustUs
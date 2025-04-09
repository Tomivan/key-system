import React from 'react';
import Frame from '../../assets/Frame-3.svg';
import './partners.component.css';

const OurPartners = () => {
    return(
        <div className="our-partners">
            <h2>Our Partners</h2>
            <p>Creating a Synergy with global brands</p>
            <img src={Frame} alt='a graphic containing all partner companies' className='partners' />
        </div>
    )
}

export default OurPartners
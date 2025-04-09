import React from 'react';
import Strategic from '../../assets/strategic.svg';
import Collaboration from '../../assets/collaboration.svg';
import Delivery from '../../assets/delivery.svg';
import './process.component.css';

const OurProcess = () => {
    return(
        <div className="our-process">
            <h2>Our Process</h2>
            <p> At KeySystem, we leave you with a lasting impression</p>
            <section className="top-section">
                <div className="strategic">
                    <h3>Strategic Consultation</h3>
                    <p>We kick off with a strategic consultation to<br /> 
                        understand your brand, goals, and audience</p>
                </div>
                <img src={Strategic} alt='a 3d cube' className='strategic-image' />
            </section>
            <section className="bottom-section">
                <div className="left-section">
                    <div className="collaboration">
                        <h3>Collaboration</h3>
                        <p>At KeySystem, we collaborate <br /> 
                           closely to ensure the end result <br /> 
                           meets your expectations <br /> 
                           and makes you happy</p>
                    </div>
                    <img src={Collaboration} alt='3d handshake' className='collaboration-image' />
                </div>
                <div className="right-section">
                    <div className="delivery">
                        <h3>Delivery</h3>
                        <p>Our delivery rate is 100%; our <br /> clients deserve nothing less.</p>
                    </div>
                    <img src={Delivery} alt='a 3d checkmark' className='delivery-image' />
                </div>
            </section>
        </div>
    )
}

export default OurProcess;
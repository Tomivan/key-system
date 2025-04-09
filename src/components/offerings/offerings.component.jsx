import React from 'react';
import './offerings.component.css';

const Offerings = () => {
    return(
        <div className='offerings'>
            <h2>Our Offerings</h2>
            <p>Leverage KeySystem’s cutting-edge expertise to transform your <br /> 
               business. Our tailored software and cybersecurity solutions drive <br /> 
               efficiency, security, and growth. We empower businesses to thrive <br /> 
               in the digital age
            </p>
            <button className='learn-more-1'>Learn More</button>
            <section className="button-section">
                <div className="top-buttons">
                    <button className='banking'>Core Banking Services</button>
                    <button className='digital middle'>Digital Banking & Financial Inclusion</button>
                    <button className='online'>Online/mobile lending solution</button>
                </div>
                <div className="middle-buttons">
                    <button className='augmentation'>Staff augmentation solutions</button>
                    <button className='audit middle'>Internal audit solutions</button>
                    <button className='data'>Data Warehouse</button>
                </div>
                <div className="bottom-buttons">
                    <button className='business'>Business Intelligence</button>
                    <button className='testing middle'>KeySystem software testing</button>
                    <button className='cybersecurity'>Cybersecurity solutions</button>
                </div>
            </section>
        </div>
    )
}

export default Offerings;
import React from 'react';
import Rectangle from '../../assets/Rectangle-2.svg';
import './trusted-consultant.component.css';

const TrustedConsultant = () => {
    return(
        <div className="trusted-consultant">
            <h2>Why we are your Trusted Consultant</h2>
            <p>Empowering Businesses with Cutting-edge Technology</p>
            <p>Excellence isn’t a goal, it’s our DNA; our relentless pursuit of <br /> 
               excellence is the driving force behind our success. Excellence is our <br /> 
               legacy, and we are proud to carry it forward. </p>
            <p>Watch the video to see how we are innovating to keep businesses on top of their games.</p>
            <img src={Rectangle} alt='Three men and two women posing for the camera' className='rectangle-2' />
        </div>
    )
}

export default TrustedConsultant;
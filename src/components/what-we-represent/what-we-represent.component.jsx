import React from 'react';
import Vision from '../../assets/vision.svg';
import Mission from '../../assets/mission.svg';
import './what-we-represent.component.css';

const Represent = ()  => {
    return(
        <div className="what-we-represent">
            <h2> What we represent</h2>
            <p>Our relentless pursuit of excellence is the driving force <br /> behind our success</p>
            <p> Excellence isn’t a goal, it’s our DNA; our relentless pursuit of excellence is the driving force <br /> 
                behind our success. Excellence is our legacy, and we are proud to carry it forward. Watch <br /> 
                the video to see how we are innovating to keep businesses on top of their games.
            </p>
            <section className="mission-vision">
                <div className="vision">
                    <img src={Vision} alt='an arrow hitting the target' className='vision-image' />
                    <h3>Our Vision</h3>
                    <p>To be the trusted partner for businesses seeking to <br /> 
                       leverage technology to improve decision-making, <br /> 
                       unlock new opportunities, and achieve <br /> transformative growth</p>
                </div>
                <div className="mission">
                    <img src={Mission} alt='a magnifying glass' className='mission-image' />
                    <h3>Our Mission</h3>
                    <p> We bridge the gap between technology and <br /> 
                        business, delivering customized ICT solutions that <br /> 
                        drive efficiency, growth, and competitive <br /> advantage.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Represent;
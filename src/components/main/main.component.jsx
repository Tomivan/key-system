import React from 'react';
import Stroke from '../../assets/Stroke.svg';
import Rectangle from '../../assets/Rectangle.svg';
import './main.component.css';

const Main = () => {
    return(
        <div className="main">
            <span className='span'>Welcome to KeySystem</span>
            <h1>IT Consulting for <br /> Forward-thinking <br /> Businesses</h1>
            <p>Driving Digital Transformation, One Solution at a Time</p>
            <div className="buttons">
                <button className='get-started'>Get Started</button>
                <button className='learn-more'>Learn More</button>
            </div>
            <div className="images">
                <img src={Stroke} alt='a wavy stroke' className='stroke' />
                <img src={Rectangle} alt='a man putting on glasses looking at screen with analytics displayed' className='rectangle' />
            </div>
        </div>
    )
}

export default Main;
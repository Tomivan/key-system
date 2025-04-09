import React from 'react';
import './get-started.component.css';

const GetStarted = () => {
    return(
        <div className='started-component'>
            <h2>Ready to get started?</h2>
            <p>Shoot us a Mail</p>
            <p> Join numerous corporations, organizations, and businesses as they <br /> 
                scale their teams, tap into new market opportunities and build <br /> 
                innovative products with KeySystem Technology</p>
            <p>Join thousands of students who are ready to learn new skills or take <br /> 
               their career to the next level by enrolling in one of our training <br /> programs today.</p>
            <button className='send-mail'>Send us a Mail Now</button>
        </div>
    )
}

export default GetStarted;
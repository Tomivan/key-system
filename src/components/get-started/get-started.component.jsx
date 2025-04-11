import React from 'react';
import './get-started.component.css';

const GetStarted = () => {
    return(
        <div className='started-component'>
            <div className="container">
                <div className="content">
                    <h2>Ready to get started?</h2>
                    <p>Shoot us a Mail</p>
                    <p> Join numerous corporations, organizations, and businesses as they 
                        scale their teams, tap into new market opportunities and build 
                        innovative products with KeySystem Technology</p>
                    <p>Join thousands of students who are ready to learn new skills or take  
                    their career to the next level by enrolling in one of our training programs today.</p>
                    <button className='send-mail'>Send us a Mail Now</button>
                </div>
                <div class="circle-container">
                    <div class="circle circle-1"></div>
                    <div class="circle circle-2"></div>
                    <div class="circle circle-3"></div>
                </div>
            </div>
        </div>
    )
}

export default GetStarted;
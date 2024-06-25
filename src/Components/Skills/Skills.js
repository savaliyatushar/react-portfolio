import React from 'react';
import "./Skills.css"
import Progressbars from '../Progressbar/Progressbar';

const Skills = () => {
    return (
        <div>
            <section className='section-skills'>
               
                <div className='b'>
                    <div className='skillheading'>
                        <div className='heading'>
                            <span className='head'>Skills</span>
                        </div>
                    </div>
                   <div className=' justify-content-center'>
                        <Progressbars />
                   </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;

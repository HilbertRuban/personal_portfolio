import React,{useEffect} from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    },[])
    return (
        <div id='skills' className='skills'>
            <div className="skills__header">
            <h1 data-aos = 'fade-down'>SKILLS</h1>
            </div>

                <div className="skills_container">
                    
                        
                    <div
                    data-aos = 'fade-right'
                     className="skills-bar"                   
                    >
                    <h2 className='skills-text'>Technical skill</h2>
                        <div className="bar">
                            <div className="info">
                                <span>HTML5</span>
                            </div>
                            <div className="progress-line html"><span></span></div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>CSS3</span>
                            </div>
                            <div className="progress-line css"><span></span></div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span className='js1'>Javascript</span>
                            </div>
                            <div className="progress-line js"><span></span></div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>React</span>
                            </div>
                            <div className="progress-line react"><span></span></div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>Python</span>
                            </div>
                            <div className="progress-line python"><span></span></div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>MySQL</span>
                            </div>
                            <div className="progress-line sql"><span></span></div>
                        </div>
                    </div>

                  
                    <div
                    data-aos = 'fade-left'
                    className="skills-bar">
                    <h2 className='skills-text'>Professional skills</h2>
                        <div className="bar1">
                            <div className="info1">
                                <span>Communication</span>
                            </div>
                            <div className="progress-line com"><span></span></div>
                        </div>
                        <div className="bar1">
                            <div className="info1">
                                <span>Team Work</span>
                            </div>
                            <div className="progress-line team"><span></span></div>
                        </div>
                        <div className="bar1">
                            <div className="info1">
                                <span>Project Management</span>
                            </div>
                            <div className="progress-line proj"><span></span></div>
                        </div>
                        <div className="bar1">
                            <div className="info1">
                                <span>Problem Solving</span>
                            </div>
                            <div className="progress-line prob"><span></span></div>
                        </div>
                        <div className="bar1">
                            <div className="info1">
                                <span>Creativity</span>
                            </div>
                            <div className="progress-line creativity"><span></span></div>
                        </div>
                    </div>
                    
            </div>
        </div>
    )
}

export default Skills

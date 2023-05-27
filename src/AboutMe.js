import React,{useEffect} from 'react';
import hrgray from './img/hrgray.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {motion} from 'framer-motion';
import Hilbert from './1.pdf';

const AboutMe = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    },[])
    return (
        <div id='about' className="wrapper">

        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <motion.img
                    drag
                    dragConstraints={{
                        right: 20,
                        left: -20,
                        top: 5,
                        bottom:5
                    }}
                    
                    data-aos='flip-right' className='profile-img' src={hrgray} alt="author" />
                    </div>
                </div>
                <div
                
                className="col-lg-6 col-xm-12">
                    <h1 data-aos ='fade-right' className='about_heading'>About Me</h1>
                    <p data-aos='zoom-in' className='about_text'> I desire to learn more about technology which tensed to cherish my knowledge.
                    Hardworking and passionate jobseeker with strong organizational skills and eager to secure entry-level web developer position in IT environment. And I admire to work in an environment which encourages me to succeed and grow professionally, so that I can utilize my skills to enhance company goals with all my  knowledge</p>
                    <p data-aos='fade-left' className='about_text'>
                    I build projects just to tickle my brain and love teaching others how they're made.
                    </p>
                    <hr data-aos ='zoom-in' />
                    {/* <a className='cv' href="#">View CV</a> */}
                    
                    <h4 className='about-top'>TOP EXPERTISE</h4>

                    <p data-aos='zoom-out' className='about_text1'>Frontend developer with primary focus on React js:<a className='cv' href={Hilbert} target="_blank">View CV</a></p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AboutMe

import React,{useState,useEffect} from 'react';
import emailjs from 'emailjs-com';
import {useForm} from 'react-hook-form';
import Aos from 'aos';
import 'aos/dist/aos.css';



function Contact() {
    useEffect(() => {
        Aos.init({duration: 2000})
    },[])
   
   
    const serviceID = 'service_ID';
    const templateID = 'template_ID';
    const userID = 'user_xeBDIUEj6vxuSxjVCZ3fY';

   

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    return (
        <div id='contact' className='contact'>
            <div className="text-center">

            <h1 data-aos='fade-down'>
                Contact Me
            </h1>
            <p data-aos='zoom-out'>Please fill out the form</p>
            </div>
            <div className="container">
                <form onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* name */}
                        <div className="text-center">
                        
                        <input                        
                        id='name'
                        type='text'
                        className='form-control'
                        placeholder='Enter your name'
                        name='name'
                      
                        />
                        <div className="line"></div>
                        </div>
                        
                        {/* phone */}
                        <div className="text-center">

                         <input
                         id='phone'
                         type='text'
                         className='form-control'
                        placeholder='Phone number'
                        name='phone'   
                        
                        />
                        <div className="line"></div>
                        </div>
                        {/* email */}
                        <div className="text-center">

                         <input
                         id='email'
                         type='email'
                         className='form-control'
                         placeholder='Mailid'
                         name='email'   
                         
                         />
                        <div className="line"></div>
                         </div>
                        {/* subject */}
                        <div className="text-center">

                         <input
                         id='subject'
                         type='text'
                         className='form-control'
                         placeholder='Subject'
                         name='subject'   
                         
                         />
                        <div className="line"></div>
                         </div>

                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* desc */}
                        <div className="text-center">

                    <textarea
                        id='description'
                        type='text'
                        className='form-control'
                        placeholder='Description'
                        name='description'
                        
                        ></textarea>
                        <div className="line"></div>
                        </div>
                        <button className="btn btn-main-offer" type='submit'>Contact me </button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
 
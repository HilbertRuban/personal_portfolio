import React,{useEffect} from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Footer() {
    useEffect(() => {
        Aos.init({duration: 2000})
    },[])
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                    <p>Hilbert Ruban</p>
                        <div className="d-flex">
                            
                            <p>Palakarai,Trichy, TamilNadu</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:8675658333">+918675658333</a>
                        </div>
                        <div className="d-flex">
                            <p>hilbertruban53@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a href="#" className="footer-nav">Home</a>
                                <br />
                                <a href="#" className="footer-nav">About Me</a>
                                <br />
                                <a href="#" className="footer-nav">Skills</a>
                                
                            </div>
                            <div className="col">
                                <a href="#" className="footer-nav">Portfolio</a>
                                <br />
                                <a href="#" className="footer-nav">Contact</a>
                                
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div  className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={'https://www.facebook.com/hilbert.ruban'}
                            
                            >
                                <FacebookIcon className='mx-3' size={20} />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={'https://twitter.com/RubanHilbert'}
                            
                            >
                                <TwitterIcon className='mx-3' size={20} />
                            </TwitterShareButton>
                            <LinkedinShareButton
                                url={'https://www.linkedin.com/in/hilbert-ruban-99522418b'}
                            
                            >
                                <LinkedinIcon className='mx-3' size={20} />
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyrights&copy;
                            {new Date().getFullYear()}&nbsp;Portfolio | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

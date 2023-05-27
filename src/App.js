import React,{useState,useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar';
import Header from './Header';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { SizeMode } from 'react-particles-js';

// import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  const[loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },6000)
  },[])
  return (
    <div className='load' >
    {
      loading ?
      <ClimbingBoxLoader 
        Size={30}
        color={'#D73636'}
        loading={loading}
      />
      :
      <div className='app'>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    
      </div>
      
     

    }
    </div>
  
  );
}

export default App;

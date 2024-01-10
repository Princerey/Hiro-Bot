import React from 'react';
import Hero from './components/Hero';
import './App.css';
import { arrow } from './assets'
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <main>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">
          <Hero />
        </div>
      </main>
      <div className=' bottom-[115px] md:right-24 sm:right-16 right-10 sm:bottom-[126px]' style={{
       fontFamily:"Yanone Kaffeesatz",
       color:"#3d3d3d",
       fontSize:"24px",
        position: "absolute",
        
      }}>Try Hiro now !!</div>
      <img src={arrow} alt='logo' className='w-[44px] sm:w-[54px] object-contain' style={{
        transform: "rotate(195deg)",
        right: "64px",
        bottom: "79px",
        position: "absolute",
        filter: "contrast(0.4)"
      }} />
      <Link to='/privacy' className='md:left-24 sm:left-16 left-6' style={{
       fontFamily:"Yanone Kaffeesatz",
       fontSize:"20px",
        bottom: "20px",
        position: "absolute",
        filter: "contrast(0.4)"
      }}>Privacy Policy</Link>
    </>
  )
}

export default App
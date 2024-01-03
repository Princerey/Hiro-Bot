import React from 'react';
import Hero from './components/Hero';
import './App.css';
import { arrow } from './assets'
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <>
    <head>
    <meta name="google-site-verification" content="M5AXSI6T05aBtOL0zN-RlAFcM4OHuGegv_NbjwxKTDg" />
    </head>
      <main>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">
          <Hero />
        </div>
      </main>
      <div style={{
       fontFamily:"Yanone Kaffeesatz",
       color:"#3d3d3d",
       fontSize:"24px",
        right: "98px",
        bottom: "126px",
        position: "absolute",
        
      }}>Try Hiro now !!</div>
      <img src={arrow} alt='logo' className='w-32 object-contain' style={{
        transform: "rotate(195deg)",
        width: "54px",
        right: "64px",
        bottom: "79px",
        position: "absolute",
        filter: "contrast(0.4)"
      }} />
      <Link to='/privacy' style={{
       fontFamily:"Yanone Kaffeesatz",
       fontSize:"20px",
        left: "30px",
        bottom: "20px",
        position: "absolute",
        filter: "contrast(0.4)"
      }}>Privacy Policy</Link>
    </>
  )
}

export default App